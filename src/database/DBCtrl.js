/** 파이어베이스 관리자 설정 (DBCtrl.js 와 같은 경로에 FirebaseAdminConfig.js 파일 생성할 것)
 * @param id 마스터키 아이디(이메일 주소)
 * @param pw 마스터키 암호
 * @param apiConfig 파이어베이스 Config
 */
import { id, pw, apiConfig } from './FirebaseAdminConfig';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

/** 파이어베이스 초기화 및 초반 관리자 로그인 상태 */
// 파이어베이스 초기화
firebase.initializeApp(apiConfig);

// 마스터키로 관리자 로그인
firebase.auth().onAuthStateChanged(user => {
    // 로그인한 사용자가 없으면 관리자로 로그인
    if (!user) {
        firebase
            .auth()
            .signInWithEmailAndPassword(id, pw)
            .catch(err => {
                const errCode = err.code;
                const errMsg = err.message;
                console.error(errCode, errMsg);
                alert(`Firebase 관리자 인증 오류 발생!\n 에러 코드: ${errCode}\n 에러 내용: ${errMsg}`);
            });
    }
});
// 파이어베이스 실시간 데이터베이스 선언
const fbdb = firebase.database();

/** 필요한 각종 데이터베이스 함수 나열할 것 */
const dbCtrl = {
    /** 관리자 로그인 상태를 해제하고 회원 로그인
     * @param stdNo 회원 학번
     * @param pw 회원 암호
     * @function callbackAfterUserLogin 로그인 후 작업 콜백 함수
     */
    userLogin(stdNo, pw, callbackAfterUserLogin) {
        // users 테이블에서 학번으로 이메일 조회
        fbdb.ref('/users/' + stdNo)
            .once('value')
            .then(snapshot => {
                // 회원 이메일 및 암호로 회원 로그인
                console.log(snapshot.val());
                firebase
                    .auth()
                    .signInWithEmailAndPassword(snapshot.val().email, pw)
                    .then(res => {
                        console.log(res);
                        console.info('회원 로그인 완료!');
                        firebase.auth().currentUser.updateProfile({
                            displayName: stdNo,
                        });
                        // 로그인이 끝난 후 처리 함수 호출(현재 로그인 한 사용자 정보)
                        callbackAfterUserLogin(firebase.auth().currentUser);
                    })
                    .catch(err => {
                        const errCode = err.code;
                        const errMsg = err.message;
                        console.error(errCode, errMsg);
                        alert(`Firebase 사용자 인증 오류 발생!\n 에러 코드: ${errCode}\n 에러 내용: ${errMsg}`);
                    });
            })
            .catch(err => {
                console.error(err);
                console.error('회원 데이터 조회 실패!');
            });
    },
};

export { dbCtrl, firebase, fbdb };
