import React from 'react';
import { Stickyroll } from '@stickyroll/stickyroll';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../styles/section2.scss';

const comments = [
    `는 연중무휴라는 뜻으로 2013년 12월 만들어진 웹 개발 학술동아리 입니다. 
    스터디를 통해 웹서비스 개발에 중점을 두고 있고, 
    팀 프로젝트를 진행하면서 각종 공모전 및 학술제에 참여하고 있습니다.`,
    `여기에 스터디 설명이 나타납니다.`,
    `여기에 홈커밍 설명이 나타납니다.`,
];

const stickyProgressLabels = [
    {
        value: 0,
        label: '소개',
    },
    {
        value: 50,
        label: '스터디',
    },
    {
        value: 100,
        label: '홈커밍',
    },
];

const ProgressSlider = withStyles({
    root: {
        color: '#1775d1',
        height: 3,
        padding: '15px 0',
    },
    thumb: {
        marginTop: '-0.31rem',
    },
    markLabel: {
        marginTop: '-2.75rem',
        color: '#999999',
        fontFamily: ['Noto Sans KR', 'sans-serif'],
        fontWeight: 500,
    },
    markLabelActive: {
        color: '#666666',
        fontWeight: 600,
    },
    rail: {
        height: 3,
        opacity: 0.5,
        backgroundColor: '#999999',
        marginLeft: -2,
    },
    track: {
        height: 3,
    },
    mark: {
        backgroundColor: '#999999',
        height: 7,
        width: 7,
        borderRadius: '50%',
        marginTop: -2,
        marginLeft: -2,
    },
    markActive: {
        opacity: 1,
        backgroundColor: '#1775d1',
        marginLeft: -2,
    },
})(Slider);

function Section2() {
    return (
        <Stickyroll pages={comments}>
            {({ page, pageIndex, pages, progress }) => {
                return (
                    <div className="section2">
                        <div className="responsive">
                            <div className="icons-container">
                                <Fade bottom cascade fraction={1} duration={666}>
                                    <div className="icons-wrapper">
                                        <div>
                                            <svg
                                                className={page === 1 ? 'active' : undefined}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                width="512"
                                                height="512"
                                            >
                                                <path d="M435.1,298.2l-2.372,1.28c-9.582-11.628-26.183-16.134-38.831-9.724-.045.022-.09.046-.134.069l-5.6,3.015a42.527,42.527,0,0,0-48.7-4.4l-30.155,16.4H269.182a57.961,57.961,0,0,1-25.09-5.749l-5.52-2.67a94.693,94.693,0,0,0-98.552,9.625c-.131.1-.259.2-.381.313l-13.327,11.864a46.226,46.226,0,0,1-17.443,9.723L101.3,303.1a6,6,0,0,0-5.739-4.25H31.108a6,6,0,0,0-5.956,6.726l21.484,176.16a6,6,0,0,0,5.956,5.274h96.674a6,6,0,0,0,5.739-7.75l-12.7-41.674,39.554-25a23.8,23.8,0,0,1,17.365-2.247c.124.031.249.059.375.081l80.459,14.816a104.117,104.117,0,0,0,64.337-9.084,5.918,5.918,0,0,0,.734-.43l139.164-95.552a6,6,0,0,0,1.744-8.041A38.2,38.2,0,0,0,435.1,298.2Zm-35.717,2.228c7.315-3.663,16.524-.66,22.406,4.953l-52.772,28.47-3.1,1.633a45.752,45.752,0,0,0-7.228-13.131Zm-54.113-1.485c.047-.027.1-.053.142-.081a30.516,30.516,0,0,1,31.037.292L349.618,313.6a45.592,45.592,0,0,0-17.138-7.713ZM57.9,475.01,37.885,310.85H91.114l50.05,164.16Zm280.784-69.431a92.038,92.038,0,0,1-56.479,7.848l-80.261-14.78a35.777,35.777,0,0,0-26.085,3.535c-.093.051-.186.107-.277.165l-36.915,23.337-26.3-86.251a58.265,58.265,0,0,0,21.917-12.257l13.139-11.7a82.736,82.736,0,0,1,85.918-8.265l5.519,2.67a70.036,70.036,0,0,0,30.315,6.946h53.525a33.851,33.851,0,0,1,33.2,27.49l-38.795-1.755a232.313,232.313,0,0,0-42.22,1.951,6,6,0,0,0,1.646,11.886,219.979,219.979,0,0,1,40.031-1.848l45.656,2.065c.091,0,.182.006.272.006a6,6,0,0,0,6-6c0-.971-.041-1.933-.1-2.89l6.261-3.3L440.8,308.756a26.214,26.214,0,0,1,31.544,5.056Z" />
                                                <path d="M76.974,450.188a18.89,18.89,0,1,0,18.89-18.89A18.911,18.911,0,0,0,76.974,450.188Zm18.89-6.89a6.89,6.89,0,1,1-6.89,6.89A6.9,6.9,0,0,1,95.864,443.3Z" />
                                                <path d="M301.622,90.305V70.533a45.544,45.544,0,0,0-91.087,0V90.305a45.544,45.544,0,0,0,91.087,0Zm-79.087,0V70.533a33.544,33.544,0,0,1,67.087,0V90.305a33.544,33.544,0,0,1-67.087,0Z" />
                                                <path d="M182.668,259.425H329.49a6,6,0,0,0,6-6V239.653H436a6,6,0,0,0,6-6V194.709a44.973,44.973,0,0,0-42.108-44.856c-3.2-.235-4.845,1.791-6.179,3.418a27.535,27.535,0,0,1-43.442-1.061,6,6,0,0,0-4.975-2.433,44.48,44.48,0,0,0-22.071,6.439,50.437,50.437,0,0,0-35.2-17.459c-3.1-.126-4.668,1.756-6.187,3.6a32.308,32.308,0,0,1-50.977-1.245,5.982,5.982,0,0,0-4.975-2.432,50.215,50.215,0,0,0-34.845,15.2c-.758.775-1.477,1.578-2.178,2.393a44.612,44.612,0,0,0-20.457-6.422c-3.189-.235-4.846,1.791-6.179,3.418a27.534,27.534,0,0,1-43.441-1.061,6.015,6.015,0,0,0-4.975-2.433A44.955,44.955,0,0,0,70,194.709v38.944a6,6,0,0,0,6,6H176.668v13.772A6,6,0,0,0,182.668,259.425Zm160.066-97.458a39.541,39.541,0,0,0,59.2.155A32.987,32.987,0,0,1,430,194.709v32.944H335.49V189.162a50.2,50.2,0,0,0-5.545-22.974A32.433,32.433,0,0,1,342.734,161.967ZM223.3,150.862a44.315,44.315,0,0,0,66.934.159,38.54,38.54,0,0,1,33.26,38.141v58.263H188.668V189.162A38.763,38.763,0,0,1,223.3,150.862ZM82,227.653V194.709a33.179,33.179,0,0,1,29.254-32.738,39.538,39.538,0,0,0,59.191.151,32.735,32.735,0,0,1,11.71,4.132,50.271,50.271,0,0,0-5.487,22.908v38.491Z" />
                                                <path d="M412.354,108.179V90.872a40.612,40.612,0,1,0-81.224,0v17.307a40.612,40.612,0,1,0,81.224,0Zm-69.224,0V90.872a28.612,28.612,0,1,1,57.224,0v17.307a28.612,28.612,0,1,1-57.224,0Z" />
                                                <path d="M180.87,108.179V90.872a40.612,40.612,0,1,0-81.224,0v17.307a40.612,40.612,0,1,0,81.224,0Zm-69.224,0V90.872a28.612,28.612,0,1,1,57.224,0v17.307a28.612,28.612,0,1,1-57.224,0Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg
                                                className={page === 2 ? 'active' : undefined}
                                                height="424pt"
                                                viewBox="0 -25 424 424"
                                                width="424pt"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0" />
                                                <path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0" />
                                                <path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0" />
                                                <path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0" />
                                                <path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0" />
                                                <path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0" />
                                                <path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0" />
                                                <path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg
                                                className={page === 3 ? 'active' : undefined}
                                                height="473pt"
                                                viewBox="0 -1 473.02425 473"
                                                width="473pt"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="m315.207031.0117188c-13.253906 0-23.996093 10.7460932-23.996093 24.0000002 0 13.253906 10.742187 23.996093 23.996093 23.996093 13.253907 0 24-10.742187 24-23.996093 0-13.253907-10.746093-24.0000002-24-24.0000002zm0 32.0000002c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0" />
                                                <path d="m243.210938 40.011719c-22.089844 0-39.996094 17.90625-39.996094 39.996093 0 22.089844 17.90625 40 39.996094 40 22.089843 0 40-17.910156 40-40-.027344-22.078124-17.921876-39.972656-40-39.996093zm0 63.996093c-13.253907 0-24-10.746093-24-24 0-13.253906 10.746093-24 24-24 13.253906 0 24 10.746094 24 24 0 13.253907-10.746094 24-24 24zm0 0" />
                                                <path d="m131.21875 56.007812c-17.671875 0-32 14.328126-32 32 0 17.671876 14.328125 32 32 32s31.996094-14.328124 31.996094-32c0-17.671874-14.324219-32-31.996094-32zm0 48c-8.839844 0-16-7.164062-16-16 0-8.835937 7.160156-16 16-16 8.835938 0 15.996094 7.164063 15.996094 16 0 8.835938-7.164063 16-15.996094 16zm0 0" />
                                                <path d="m83.21875.0117188c-13.253906 0-23.996094 10.7460932-23.996094 24.0000002 0 13.253906 10.742188 23.996093 23.996094 23.996093s24-10.742187 24-23.996093c0-13.253907-10.746094-24.0000002-24-24.0000002zm0 32.0000002c-4.417969 0-8-3.582031-8-8s3.582031-8 8-8 8 3.582031 8 8-3.582031 8-8 8zm0 0" />
                                                <path d="m277.417969 257.007812 15.136719-5.148437 51.742187 152.070313-15.140625 5.148437zm0 0" />
                                                <path d="m236.492188 270.886719 15.136718-5.152344 51.742188 152.070313-15.140625 5.152343zm0 0" />
                                                <path d="m318.339844 243.054688 15.140625-5.148438 51.722656 152.070312-15.136719 5.148438zm0 0" />
                                                <path d="m470.601562 295.660156-37.800781-111.136718c-8.011719-23.5625-33.605469-36.167969-57.167969-28.15625-.003906.003906-.007812.003906-.011718.003906l-21.679688 7.375-1.398437-4.125c-10.191407-30.023438-42.789063-46.101563-72.808594-35.910156-10.804687 3.664062-20.269531 10.464843-27.1875 19.535156-13.996094-1.046875-27.664063 4.589844-36.855469 15.199218-1.726562-.566406-3.488281-1.007812-5.277344-1.328124-5.914062-1.027344-11.972656-.863282-17.824218.480468-22.90625-21.929687-59.246094-21.136718-81.175782 1.769532-7.871093 8.222656-13.125 18.605468-15.082031 29.820312l-.753906 4.296875-22.558594-3.945313c-24.515625-4.289062-47.863281 12.105469-52.15625 36.621094v.007813l-20.191406 115.625c-4.253906 24.515625 12.136719 47.847656 36.636719 52.160156l22.550781 3.941406-.71875 4.113281c-10.945313 2.554688-17.746094 13.5-15.191406 24.445313 1.859375 7.953125 8.292969 14.027344 16.34375 15.425781l170.390625 29.796875c1.160156.207031 2.332031.3125 3.503906.3125 7.953125-.035156 15.15625-4.695312 18.449219-11.933593 3.558593.8125 7.277343.605468 10.726562-.59375l163.777344-55.71875c10.644531-3.621094 16.335937-15.1875 12.714844-25.832032-2.625-7.71875-9.601563-13.125-17.730469-13.742187l-1.34375-3.941407 21.667969-7.375c23.546875-8.042968 36.136719-33.625 28.152343-57.191406zm-130.59375-123.3125 2.804688 8.253906-55.042969 18.726563-2.832031-8.253906zm-133.121093 6.101563c3.371093-1.144531 6.925781-1.652344 10.484375-1.492188 2.925781.144531 5.6875-1.332031 7.191406-3.839843l.027344.007812c6.277344-10.390625 18.367187-15.761719 30.285156-13.457031 3.242188.621093 6.535156-.808594 8.289062-3.609375 5.007813-8.054688 12.660157-14.117188 21.644532-17.15625 18.734375-6.347656 39.34375 1.421875 49.222656 18.558594l-61.851562 21.046874c-4.171876 1.433594-6.394532 5.976563-4.96875 10.152344l11.933593 35.09375c1.679688 5.570313-1.480469 11.445313-7.050781 13.125-5.292969 1.59375-10.917969-1.175781-12.882812-6.34375l-4-11.695312c-1.285157-4.226563-5.757813-6.609375-9.984376-5.320313-4.226562 1.289063-6.609374 5.757813-5.320312 9.984375.050781.167969.105469.332032.167969.496094 1.773437 5.542969-1.285157 11.472656-6.828125 13.242188-5.402344 1.726562-11.203125-1.136719-13.121094-6.476563l-8-23.398437c-1.425781-4.175782-5.964844-6.410157-10.144531-4.992188l-14.628907 4.976562c-.65625-12.910156 7.308594-24.695312 19.535157-28.902343zm-4.480469 49.953125-8.257812 2.804687-2.796876-8.253906 8.246094-2.800781zm-42.34375-70.140625.023438.007812c9.367187 1.601563 17.878906 6.410157 24.089843 13.597657.417969.453124.894531.855468 1.40625 1.199218-6.234375 5.84375-10.691406 13.332032-12.855469 21.601563l-58.398437-10.457031c7.109375-18.445313 26.253906-29.308594 45.734375-25.949219zm-49.324219 41.636719 60.773438 10.863281c.316406 3.023437.945312 6.003906 1.871093 8.894531l-64.140624-11.199219zm-70.714843 178.292968c-15.789063-2.804687-26.332032-17.847656-23.59375-33.644531l20.230468-115.632813c2.753906-15.804687 17.796875-26.386718 33.601563-23.632812.015625.003906.03125.003906.046875.007812l22.542968 3.9375-1.496093 8.589844-16.464844-2.878906c-14.433594-2.527344-28.183594 7.128906-30.710937 21.5625-.003907.011719-.003907.023438-.007813.035156l-18.09375 103.460938c-2.515625 14.441406 7.15625 28.191406 21.597656 30.710937l16.464844 2.878907-1.496094 8.589843zm48.570312-144.613281-21.71875 124.214844-16.476562-2.878907c-5.726563-1.003906-9.558594-6.460937-8.554688-12.1875 0 0 .003906 0 .003906-.003906l18.09375-103.464844c1.019532-5.722656 6.464844-9.542968 12.191406-8.5625zm149.902344 218.792969c-.417969 2.371094-2.679688 3.957031-5.050782 3.539062v.015625l-170.394531-29.808593c-2.382812-.332032-4.046875-2.535157-3.714843-4.917969.335937-2.386719 2.539062-4.050781 4.921874-3.714844.101563.011719.199219.03125.296876.050781 4.355468.757813 8.496093-2.152344 9.257812-6.503906l32.6875-186.878906 72.714844 12.71875 55.75 163.921875-6.519532 37.269531c-.367187 2.089844.113282 4.238281 1.335938 5.976562 1.222656 1.734376 3.082031 2.914063 5.175781 3.277344 2.371094.417969 3.957031 2.679688 3.539063 5.054688zm186.21875-69.304688c.777344 2.273438-.433594 4.746094-2.707032 5.523438-.003906 0-.003906.003906-.003906.003906l-163.777344 55.722656c-2.28125.78125-4.757812-.433594-5.539062-2.714844s.433594-4.757812 2.714844-5.539062c4.183594-1.421875 6.421875-5.964844 5-10.148438v-.003906l-61.09375-179.597656 9.535156-3.242188c8.625 11.785157 25.167969 14.347657 36.949219 5.722657 1.433593-1.046875 2.757812-2.238281 3.953125-3.554688 2.207031 2.355469 4.816406 4.289063 7.710937 5.714844 13.148438 6.46875 29.054688 1.054687 35.527344-12.09375 3.105469-6.3125 3.578125-13.597656 1.3125-20.257813l-1.40625-4.121093 55.050781-18.734375 61.101563 179.597656c1.421875 4.183594 5.960937 6.425781 10.148437 5.007812.003906-.003906.007813-.003906.011719-.007812 2.269531-.761719 4.734375.453125 5.511719 2.722656zm-57.644532-180.792968 15.820313-5.382813c5.503906-1.875 11.488281 1.066406 13.363281 6.570313 0 .003906.003906.011718.003906.019531l33.832032 99.429687c1.867187 5.507813-1.078125 11.488282-6.582032 13.367188l-15.824218 5.382812zm70.242188 135.402343-21.667969 7.375-2.839843-8.253906 15.828124-5.386719c13.863282-4.738281 21.273438-19.796875 16.570313-33.667968l-33.839844-99.4375c-4.742187-13.851563-19.792969-21.261719-33.664062-16.574219l-15.820313 5.382812-2.800781-8.246093 21.726563-7.34375c15.203124-5.171876 31.71875 2.957031 36.894531 18.160156l37.773437 111.113281c5.148438 15.195313-2.976562 31.691406-18.160156 36.878906zm0 0" />
                                                <path d="m142.125 429.308594 27.675781-158.222656 15.761719 2.757812-27.679688 158.222656zm0 0" />
                                                <path d="m184.792969 436.800781 15.515625-94.101562 15.78125 2.601562-15.519532 94.101563zm0 0" />
                                                <path d="m99.605469 421.824219 27.675781-158.238281 15.761719 2.753906-27.679688 158.238281zm0 0" />
                                            </svg>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <Zoom fraction={0.7} duration={666}>
                                <div className="slider-wrapper">
                                    <ProgressSlider
                                        value={(page - 1) * 50 + progress * 50}
                                        aria-labelledby="discrete-slider-custom"
                                        marks={stickyProgressLabels}
                                    />
                                </div>
                            </Zoom>
                            <div className="introduce inner-header">
                                <Fade bottom distance="108px" fraction={1}>
                                    <h1 className="header-font kr">오픈이어라운드</h1>
                                </Fade>
                            </div>
                            <div className="introduce inner-content">
                                <Fade bottom distance="108px" fraction={1}>
                                    <p className="desc-font kr">{comments[pageIndex]}</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Stickyroll>
    );
}

export default Section2;