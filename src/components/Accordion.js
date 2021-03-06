import React, { useState } from 'react';
import FAQData from '../datas/FAQData.json';
import '../styles/accordion.scss';

function Accordion({ match }) {
    const { id } = match.params;

    function AccordionItem({ paragraph, title }) {
        const [opened, setOpened] = useState(false);
        return (
            <div
                {...{
                    className: `accordion-item, ${opened && 'accordion-item--opened'}`,
                    onClick: () => {
                        setOpened(!opened);
                    },
                }}
            >
                <div className="accordion-item__line">
                    <h3 className="accordion-item__title">{title}</h3>
                    <span className="accordion-item__icon" />
                </div>
                <div className="accordion-item__inner">
                    <div className="accordion-item__content">
                        <p className="accordion-item__paragraph">{paragraph}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <ul className="accordion-list">
                {Object.keys(FAQData[id]).map((k, idx) => (
                    <li key={idx} {...{ className: 'accordion-list__item' }}>
                        <AccordionItem title={FAQData[id][k].title} paragraph={FAQData[id][k].paragraph} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Accordion;
