
function sliderHiro(){

    var sliderSectionsLength = document.querySelectorAll('.slider-hiro__section').length;
    var sliderButtonLeft = document.querySelector('.slider__button_type_left');
    var sliderButtonRight = document.querySelector('.slider__button_type_right');
    var sliderSectionNum = 0;

    var sliderSectionInner = document.querySelector('.slider-hiro__inner');

    sectionShift();

    sliderButtonLeft.addEventListener("click", function(){
        if(sliderSectionNum == 0) return false;
        sliderSectionNum = sliderSectionNum - 1;
        sectionShift();
    });

    sliderButtonRight.addEventListener("click", function(){
        if(sliderSectionNum == (sliderSectionsLength-1)) return false;
        sliderSectionNum = sliderSectionNum + 1;
        sectionShift();
    });

    function sectionShift(){

        var sliderShift = (33.333333 * sliderSectionNum);
        sliderSectionInner.style.transform = "translateX(-"+ sliderShift +"%)";
    }
    window.addEventListener("resize", sectionShift);
}
window.addEventListener("load", sliderHiro);
