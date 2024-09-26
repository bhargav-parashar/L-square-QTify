import React, {useEffect,useState} from "react";
import {useSwiper} from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/left-arrow.svg";

const CarouselRightNavigation = ()=>{
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBeginning(swiper.isBeginning);
        });
    },[swiper]);

    return(
        <div className={styles.leftArrow}>
            {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} /> }
        </div>
    )
}
export default CarouselRightNavigation;