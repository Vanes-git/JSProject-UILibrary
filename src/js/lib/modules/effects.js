import $ from "../core";

$.prototype.animateOverTime = function (dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === "function") {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fIn = function(i, display, dur, fin) {
    this[i].style.display = display || "block";

    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
};

$.prototype.fOut = function(i, display, dur, fin)  {
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
            this[i].style.display = "none";
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
};

$.prototype.fadeIn = function (dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this.fIn(i, display, dur, fin);
    }

    return this;
};

$.prototype.fadeOut = function (dur, fin) {
    for (let i = 0; i < this.length; i++) {
        this.fOut(i, display, dur, fin);
    }

    return this;
};

$.prototype.fadeToggle = function (dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === "none") {
            this.fIn(i, display, dur, fin);
        } else {
            this.fOut(i, display, dur, fin);
        }
    }

    return this;
};
