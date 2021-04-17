import classnames from 'classnames';
import styles from './preloader.module.scss'
import {useState, useEffect } from 'react'

export function Preloader({
    className,
    style
}) {
    const classNames = classnames({
        [className]: className,
        [styles.base]: true,
    })

     // const bodyClassList = document.querySelector("body").classList

        const check_element = (ele) => {
          var all = document.getElementsByTagName("*");
          var totalele=all.length;
          var per_inc=100/all.length;

          if($(ele).on())
          {
            var prog_width=per_inc+Number(document.getElementById("progress_width").value);
            var prog_width2=per_inc-Number(document.getElementById("progress_width").value);
            document.getElementById("progress_width").value=prog_width;
            $("#bar1").animate({width:prog_width+"%","left":"0"},3,function(){
              if(document.getElementById("bar1").style.width=="100%")
              {
                
                
                $("#bar1").animate({ "left":prog_width+"%"}, 1000, function(){
                      $("#progress_div").fadeOut("slow");
                    
                });
                
              
              }         
            });
          }

          else{
            set_ele(ele);
          }
        }

        const set_ele = (set_element) => {
          check_element(set_element);
        }


        useEffect(() => {
           
        
                document.onreadystatechange = (e) => {
                   
                    
                    if(document.readyState=="complete" || document.readyState=="interactive"){
                        var all = document.getElementsByTagName("*");
                         

                        for (var i=0, max=all.length; i < max; i++){
                          set_ele(all[i]);
                        }
                         

                    }

                   
                }
            
        }, [])


    return (
       <>
      <div className={styles.preloader_box} id="progress_div">
        <div className={styles.bar} id="bar1"></div>
        <div className={styles.percent} id="percent1"></div>

        <div className={styles.preloaderMainContent}>
          <h1>A creative studio in the works</h1>
        </div>

      </div>
      
      
      <input type="hidden" id="progress_width" value="0"/>
      
    </>
    )
}
