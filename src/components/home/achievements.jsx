import '../css/achieveStyle.css';

const Achievements = () => {


    return(

        
    <div className="achievements">
        <h2 className="achievement-title">Achievements</h2>
        <hr className="divider"/>
        <p className="description">Our chapter has achieved numerous accolades, including:</p>
        <div class="achievement-container">
            <div class="achievements-item">
                <div class="achievements-number">
                    425+
                </div>
                <div class="achievements-text">
                    Members
                </div>
            </div>
            <div class="achievements-item">
                <div class="achievements-number">
                    100+
                </div>
                <div class="achievements-text">
                    State Winners
                </div>
            </div>
            <div class="achievements-item">
                <div class="achievements-number">
                    60+
                </div>
                <div class="achievements-text">
                    National Qualifiers
                </div>
            </div>
            <div class="achievements-item">
                <div class="achievements-number">
                    40+
                </div>
                <div class="achievements-text">
                    National Winners
                </div>
            </div>
        </div>
        <p className="description">We are proud of our members' hard work and dedication. Join us to be part of a winning team!</p>
    </div>
    )
}

export default Achievements;
