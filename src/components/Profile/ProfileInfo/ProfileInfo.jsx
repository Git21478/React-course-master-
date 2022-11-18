import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        
        <div> 
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif"/>
             </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
        
    
    )
}

export default ProfileInfo;