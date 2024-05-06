import React from 'react';
import "../../assets/scss/main.scss";

interface RoadmapCardProps {
    className: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ className }) => {
    return (
        <div>
            <div className="RoadmapCard card-design alignCenter justifyCenter">
                <div className={`paragraph  ${className}`}>
                    debitis accusamus quam dicta velit aspernatur natus consequatur
                    nulla beatae odit, nostrum sed architecto inventore laudantium
                    deserunt quisquam
                </div>
            </div>
        </div>
    );
};

export default RoadmapCard;