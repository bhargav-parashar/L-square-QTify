import React, {useEffect,useState} from "react";
import {useSwiper} from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import {ReactComponent as RightArrow} from "../../../assets/right-arrow.svg";

const CarouselRightNavigation = ()=>{
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    console.log(isEnd);
    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd);
        });
    },[swiper]);

    return(
        <div className={styles.rightArrow}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()} /> }
        </div>
    )
}
export default CarouselRightNavigation;