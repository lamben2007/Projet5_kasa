import { useState } from 'react';
import './Collapse.scss'
import PropTypes from 'prop-types';
import topArrowImg from '/topArrow.png';

function Collapse({ title, collapseText }) {

    //
    const [isOpen, setIsOpen] = useState(false);

    //
    const handleClick = () => {
        //
        setIsOpen(!isOpen);
    };


    //
    return (

        <div className="divCollapse">

            <div className="divCollapse_bar">
                <div className="divCollapse_bar_title">{title}</div>

                <button className="divCollaps_bar_button" onClick={handleClick}>
                    <img className={isOpen ? 'rotated' : ''} src={topArrowImg} alt="arrow" />
                </button>
            </div>

            {
                !Array.isArray(collapseText) ? (
                    <div className={`divCollapse_text ${!isOpen ? 'divCollapse_text--invisible' : ''}`}>
                        {collapseText}
                    </div>
                ) :
                    (
                        <div className={`divCollapse_text ${!isOpen ? 'divCollapse_text--invisible' : ''}`}>
                            <ul>
                                {collapseText.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    )
            }

        </div>

    )

}

//
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    collapseText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Collapse