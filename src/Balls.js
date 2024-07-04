
import './Balls.css'

const Balls= ()=>{
    return(
        <div className="skill-bars">
        <div className="skill1">
            <div className="skill-label">Photoshop Design</div>
            <div className="skill-bar1 photoshop">
                <div className="skill-ball1"></div>
            </div>
        </div>
        <div className="skill2">
            <div className="skill-label">Brand experiences</div>
            <div className="skill-bar2 brand">
                <div className="skill-ball2"></div>
            </div>
        </div>
        <div className="skill3">
            <div className="skill-label">Mobile Development</div>
            <div className="skill-bar3 mobile">
                <div className="skill-ball3"></div>
            </div>
        </div>
    </div>
    )
}

export default Balls