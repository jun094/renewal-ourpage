import React from 'react';
import Card from '../components/CardView';
import '../styles/section3.scss';
import activities from '../datas/activities.json';
import { useCountUp } from 'react-countup';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

function Section3() {
    const ColorButton = withStyles(theme => ({
        root: {
            color: theme.palette.getContrastText('#1775d1'),
            backgroundColor: '#1775d1',
            '&:hover': {
                backgroundColor: '#1775d1',
            },
        },
    }))(Button);

    const useCountUps = [
        useCountUp({
            start: 0,
            end: 107,
            delay: 5000,
            duration: 6,
        }),
        useCountUp({
            start: 0,
            end: 24,
            delay: 5000,
            duration: 6,
        }),
        useCountUp({
            start: 0,
            end: 15,
            delay: 5000,
            duration: 6,
        }),
    ];

    return (
        <div className="section3">
            <div className="responsive">
                <Fade bottom fraction={1}>
                    <div className="kr header-font project-header">우리들의 프로젝트</div>
                </Fade>
                <Fade
                    bottom
                    fraction={1}
                    onReveal={() => {
                        useCountUps[0].start();
                        useCountUps[1].start();
                        useCountUps[2].start();
                    }}
                >
                    <div className="project-count kr desc-font">
                        <span className="count">
                            <div>{useCountUps[0].countUp}</div>
                            <p>진행된 프로젝트</p>
                        </span>
                        <span className="count">
                            <div>{useCountUps[1].countUp}</div>
                            <p>공모전 수상</p>
                        </span>
                        <span className="count">
                            <div>{useCountUps[2].countUp}</div>
                            <p>스터디 진행</p>
                        </span>
                    </div>
                </Fade>

                <div className="cardView">
                    {Object.keys(activities)
                        .filter((i, idx) => idx <= 5)
                        .map((act, idx) => (
                            <Card class="card" title={act} day={activities[act].day} contents={activities[act].content} key={idx}></Card>
                        ))}
                </div>

                <div className="moreButton">
                    <ColorButton variant="contained" color="primary">
                        <p className="kr">프로젝트 더 보기</p>
                    </ColorButton>
                </div>
            </div>
        </div>
    );
}

export default Section3;