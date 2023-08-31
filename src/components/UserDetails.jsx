import React, { useState } from 'react';
import styles from '../styles/userDetails.module.css';

export default function UserDetails () {

    const [selectedGender, setSelectedGender] = useState(null);
    const handleGenderClick = (gender) => {
        setSelectedGender(gender);
      };


      const [selectedWeightGoal, setSelectedWeightGoal] = useState(null);
      const handleWeightGoalClick = (goal) => {
        setSelectedWeightGoal(goal);
      };


      const [selectedActivityLevel, setSelectedActivityLevel] = useState(null);
      const handleActivityLevelClick = (level) => {
        setSelectedActivityLevel(level);
    };
    
  return (
    
    <div>
            <div className={`${styles.holder} row`}>
                <div className={`${styles.left} col-md-7 mt-3`}>
                    <div className={`${styles.mydata} col-md-15 d-flex`}>
                        <div className={`${styles.first} d-flex flex-xs-column`}>
                            <span className='w-75'>Your Age</span>
                            <input class="form-control p-2 w-100" type="text" placeholder="" aria-label="Search" />
                        </div>
                        <div className={`${styles.first} d-flex container`}>
                            <span>Height</span>
                            <input class="form-control p-2 w-100" type="text" placeholder="cm" aria-label="Search" />
                        </div>
                        <div className={`${styles.first} d-flex container`}>
                            <span>Weight</span>
                            <input class="form-control p-2 w-100" type="text" placeholder="kg" aria-label="Search" />
                        </div>
                    </div>

                    <div className={`${styles.gender} mb-5 mt-3`}>
            <h4>You're a</h4>
            <div className=''>
              <button
                className={`${styles.leftt} ${
                  selectedGender === 'male' ? styles.selected : ''
                }`}
                onClick={() => handleGenderClick('male')}
              >
                Male
              </button>
              <button
                className={`${styles.right} ${
                  selectedGender === 'female' ? styles.selected : ''
                }`}
                onClick={() => handleGenderClick('female')}
              >
                Female
              </button>
            </div>
          </div>

          <div className={`${styles.weightControl} mb-5`}>
            <h4>What is your weight goal</h4>
            <div className=''>
              <button
                className={`${styles.leftt} ${
                  selectedWeightGoal === 'lose' ? styles.selected : ''
                }`}
                onClick={() => handleWeightGoalClick('lose')}
              >
                Lose
              </button>
              <button
                className={`${styles.center} ${
                  selectedWeightGoal === 'maintain' ? styles.selected : ''
                }`}
                onClick={() => handleWeightGoalClick('maintain')}
              >
                Maintain
              </button>
              <button
                className={`${styles.right} ${
                  selectedWeightGoal === 'gain' ? styles.selected : ''
                }`}
                onClick={() => handleWeightGoalClick('gain')}
              >
                Gain
              </button>
            </div>
          </div>
          <div className={`${styles.weightStatus} container mb-5`}>
            <h4 className=''>What is your activity level</h4>
            <div className=''>
              <div className='col-xs-4 row mr-5'>
                <button
                  className={`${styles.leftt} col-md-4 col-sm-4 col-xs-4 ${
                    selectedActivityLevel === 'inactive' ? styles.selected : ''
                  }`}
                  onClick={() => handleActivityLevelClick('inactive')}
                >
                  <div className={`${styles.inactive}`}>
                    <h5>Inactive</h5> <span>No exercise</span>
                  </div>
                </button>
                <button
                  className={`${styles.center} col-md-4 col-sm-4 col-xs-4 ${
                    selectedActivityLevel === 'somewhat' ? styles.selected : ''
                  }`}
                  onClick={() => handleActivityLevelClick('somewhat')}
                >
                  <div className={`${styles.somewhat}`}>
                    <h5>Somewhat Active</h5> <span>(3x-4x per week)</span>
                  </div>
                </button>
                <button
                  className={`${styles.right} col-md-4 col-sm-4 col-xs-4 ${
                    selectedActivityLevel === 'active' ? styles.selected : ''
                  }`}
                  onClick={() => handleActivityLevelClick('active')}
                >
                  <div className={`${styles.aactive}`}>
                    <h5>Active</h5> <span>(5x+ per week)</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

                    <button type="submit" className={`${styles.Submit} col-md-6 col-sm-10 mb-4 align-content-center`}>Update details</button>
                </div>
            </div>
            
        </div>
  )
}
