/*
 * THIS FUNCTION CREATES
 * THE COLLECTION
 */
function initCollection() {
    
    /******************************/
	/*          VARIABLE          */
	/******************************/
    
    var collection = document.getElementById("collection");
    var object = [];
    
    /******************************/
	/*          FUNCTION          */
	/******************************/
    
    function create(object) {
        // CREATE ITEM
        var item = document.createElement("div");
        item.className = object.class;
        // CREATE BAR
        if (object.type == "Digital") {
            var bar = document.createElement("div");
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");
            var div3 = document.createElement("div");
            bar.className = "bar";
            bar.appendChild(div1);
            bar.appendChild(div2);
            bar.appendChild(div3);
            item.appendChild(bar);
        }
        // CREATE TITLE
        var title = document.createElement("div");
        var headline = document.createElement("p");
        var type = document.createElement("p");
        title.className = "title";
        title.appendChild(headline);
        title.appendChild(type);
        headline.className = "headline";
        headline.innerHTML = object.headline;
        type.className = "type";
        type.innerHTML = object.type;
        // CREATE LINK
        var link = document.createElement("div");
        link.className = "link";
        if (object.vimeo !== undefined) {
            var vimeo = document.createElement("a");
            vimeo.appendChild(document.createElement("div"));
            vimeo.className = "vimeo";
            vimeo.href = object.vimeo;
            vimeo.target = "_blank";
            vimeo.rel = "noopener noreferrer";
            vimeo.setAttribute('title', 'Vimeo');
            link.appendChild(vimeo);
        }
        if (object.youtube !== undefined) {
            var youtube = document.createElement("a");
            youtube.appendChild(document.createElement("div"));
            youtube.className = "youtube";
            youtube.href = object.youtube;
            youtube.target = "_blank";
            youtube.rel = "noopener noreferrer";
            youtube.setAttribute('title', 'YouTube');
            link.appendChild(youtube);
        }
        if (object.www !== undefined) {
            var www = document.createElement("a");
            www.appendChild(document.createElement("div"));
            www.className = "www";
            www.href = object.www;
            www.target = "_blank";
            www.rel = "noopener noreferrer";
            www.setAttribute('title', 'Website');
            link.appendChild(www);
        }
        if (object.github !== undefined) {
            var github = document.createElement("a");
            github.appendChild(document.createElement("div"));
            github.className = "github";
            github.href = object.github;
            github.target = "_blank";
            github.rel = "noopener noreferrer";
            github.setAttribute('title', 'GitHub');
            link.appendChild(github);
        }
        // CREATE IMAGE
        var image = document.createElement("div");
        var img = document.createElement("img");
        image.className = "image";
        image.appendChild(img);
        img.src = object.image;
        img.draggable = false;
        // APPEND CHILD
        item.appendChild(title);
        item.appendChild(link);
        item.appendChild(image);
        collection.appendChild(item);
        // ASSIGN ELEMENT
        object.portfolio = title;
    }
    
    function get() {
        return object;
    }
    
    /******************************/
	/*           OBJECT           */
	/******************************/
    
    object = [
        {
            id: "bugflixAngular",
            class: "item all digital",
            slider: false,
            video: true,
            headline: "Bugflix Angular",
            type: "Digital",
            github: "https://github.com/benedictbelz/CareerFoundry-Bugflix-Angular",
            image: "media/collection/bugflixAngular/title.png",
            portfolio: undefined,
            showroom: "html/bugflixAngular.html"
        },
        {
            id: "bugflixApi",
            class: "item all digital",
            slider: false,
            video: true,
            headline: "Bugflix API",
            type: "Digital",
            github: "https://github.com/benedictbelz/CareerFoundry-Bugflix-API",
            image: "media/collection/bugflixApi/title.png",
            portfolio: undefined,
            showroom: "html/bugflixApi.html"
        },
        {
            id: "bugflixReact",
            class: "item all digital",
            slider: false,
            video: true,
            headline: "Bugflix React",
            type: "Digital",
            github: "https://github.com/benedictbelz/CareerFoundry-Bugflix-React",
            image: "media/collection/bugflixReact/title.png",
            portfolio: undefined,
            showroom: "html/bugflixReact.html"
        },
        {
            id: "chatApp",
            class: "item all digital",
            slider: false,
            video: true,
            headline: "Chat App",
            type: "Digital",
            github: "https://github.com/benedictbelz/CareerFoundry-Chat-App",
            image: "media/collection/chatApp/title.png",
            portfolio: undefined,
            showroom: "html/chatApp.html"
        },
        {
            id: "meetApp",
            class: "item all digital",
            slider: false,
            video: true,
            headline: "Meet App",
            type: "Digital",
            github: "https://github.com/benedictbelz/CareerFoundry-Meet-App",
            image: "media/collection/meetApp/title.png",
            portfolio: undefined,
            showroom: "html/meetApp.html"
        },
        {
            id: "pokemonApp",
            class: "item all digital",
            slider: false,
            video: true,
            headline: "Pokemon App",
            type: "Digital",
            github: "https://github.com/benedictbelz/CareerFoundry-Pokemon-App",
            image: "media/collection/pokemonApp/title.png",
            portfolio: undefined,
            showroom: "html/pokemonApp.html"
        }
    ];
    
    // CREATE COLLECTION
    object.forEach(function(e) {
        create(e);
    });
    
    /******************************/
	/*           GLOBAL           */
	/******************************/

    initCollection.get = get;
    
}

/*
 * THIS FUNCTION DETECTS THE CURRENT DEVICE
 */
function initDevice() {
	
    /******************************/
	/*          VARIABLE          */
	/******************************/
    
    var html = document.querySelector("html");
    var booleanMobile;
    
	/******************************/
	/*          FUNCTION          */
	/******************************/
	
    // SELF INVOKING FUNCTION
    (function () {
        // DETECT DEVICE
        booleanMobile = "ontouchstart" in window || "onmsgesturechange" in window;
        // IF MOBILE DEVICE
        if (booleanMobile) {
            html.className = "mobile";
        }
        // IF DESKTOP DEVICE
        else {
            html.className = "desktop";
        }
    }());
    
    // RETURN BOOLEAN MOBILE
    function mobile() {
        return booleanMobile;
    }
    
    // PREVENT DEFAULT ON MOBILE
    function ios() {
        // ELEMENTS
        var information = document.getElementById("information");
        var portfolio = document.getElementById("portfolio");
        var showroom = document.getElementById("showroom");
        // POSITION
        var positionInformation = 0;
        var positionPortfolio = 0;
        var positionShowroom = 0;
        // EVENT LISTENER INFORMATION
        information.addEventListener("touchstart", e=> {
            positionInformation = e.touches[0].clientY;
        });
        information.addEventListener("touchmove", e=> {
            var top = e.touches[0].clientY;
            var scrollTop = e.currentTarget.scrollTop;
            var direction = (positionInformation - top) < 0 ? "up" : "down";
            if (scrollTop <= 0 && direction == "up")
                e.preventDefault();
            else if (scrollTop >= (e.currentTarget.scrollHeight - e.currentTarget.offsetHeight) && direction == "down")
                e.preventDefault();
        });
        // EVENT LISTENER PORTFOLIO
        portfolio.addEventListener("touchstart", e=> {
            positionPortfolio = e.touches[0].clientY;
        });
        portfolio.addEventListener("touchmove", e=> {
            var top = e.touches[0].clientY;
            var scrollTop = e.currentTarget.scrollTop;
            var direction = (positionPortfolio - top) < 0 ? "up" : "down";
            if (scrollTop <= 0 && direction == "up")
                e.preventDefault();
            else if (scrollTop >= (e.currentTarget.scrollHeight - e.currentTarget.offsetHeight) && direction == "down")
                e.preventDefault();
        });
        // EVENT LISTENER SHOWROOM
        showroom.addEventListener("touchstart", e=> {
            positionShowroom = e.touches[0].clientY;
        });
        showroom.addEventListener("touchmove", e=> {
            var top = e.touches[0].clientY;
            var scrollTop = e.currentTarget.scrollTop;
            var direction = (positionShowroom - top) < 0 ? "up" : "down";
            if (scrollTop <= 0 && direction == "up")
                e.preventDefault();
            else if (scrollTop >= (e.currentTarget.scrollHeight - e.currentTarget.offsetHeight) && direction == "down")
                e.preventDefault();
        });
    }
    
    function safari() {
        var chrome = navigator.userAgent.indexOf("Chrome") > -1;
        var explorer = navigator.userAgent.indexOf("MSIE") > -1;
        var firefox = navigator.userAgent.indexOf("Firefox") > -1;
        var safari = navigator.userAgent.indexOf("Safari") > -1;
        var opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
        if (chrome && safari)
            safari = false;
        if (chrome && opera)
            chrome = false;
        if (safari)
            return true;
        else
            return false;
    }
    
    /******************************/
	/*           GLOBAL           */
	/******************************/
    
    initDevice.mobile = mobile;
    initDevice.safari = safari;
	
}

/*
 * THIS FUNCTION INITIALIZES THE FADE 
 * OF ITEMS IN THE COLLECTION
 */
function initFade() {
    
    /******************************/
	/*          VARIABLE          */
	/******************************/
    
    var timeout = [];
    var item = document.querySelectorAll(".item");
    
    /******************************/
	/*          FUNCTION          */
	/******************************/
    
    // FADE ITEMS
    function fade() {
        // LOCAL
        var i = 0;
        // RESET
        for (var k = 0; k < item.length; k++) {
            if (timeout.length !== 0)
                clearTimeout(timeout[k]);
            item[k].classList.add("opacity");
            item[k].classList.remove("fade");
        }
        // SELECT VISIBLE ELEMENTS
        var visible = document.querySelectorAll(".item:not(.none)");
        // FADE ELEMENTS
        function recursive() {
            visible[i].classList.remove("opacity");
            visible[i].offsetWidth;
            visible[i].classList.add("fade");
            if (initDevice.safari) {
                visible[i].style.webkitAnimationPlayState="paused";
                visible[i].style.webkitAnimationPlayState="running";
            }
            i++;
            if (i < visible.length)
                timeout.push(setTimeout(recursive,100));
        }
        recursive();
    }
    
    // RESET ITEMS
    function reset() {
        for (var i = 0; i < item.length; i++) {
            item[i].classList.remove("fade");
        }
    }
    
    /******************************/
	/*           GLOBAL           */
	/******************************/
    
    initFade.fade = fade;
    initFade.reset = reset;
    
}

/*
 * THIS FUNCTION INITIALIZES THE
 * NAVIGATION OF THE WEBSITE
 */
function initNavigation() {
    
	/******************************/
	/*          VARIABLE          */
	/******************************/
    
    // ELEMENT
    var documentElement = document.documentElement;
    var html = document.querySelector("html");
    var body = document.querySelector("body");
    var entrance = document.getElementById("entrance");
    var portfolio = document.getElementById("portfolio");
    var information = document.getElementById("information");
    var showroom = document.getElementById("showroom");
    var legal = document.getElementById("legal");
    // NAVIGATION
    var navigation = document.getElementById("navigation");
    var navigationLeft = document.getElementById("navigationLeft");
    var navigationRight = document.getElementById("navigationRight");
    var enter = document.getElementById("enter");
    var imprint = document.getElementById("imprint");
	// BOOLEAN
    var booleanClick = false;
	var booleanInformation = false;
    var booleanLegal = false;
	var booleanShowroom = false;
    // ITEM
    var item;
	
	/******************************/
	/*          FUNCTION          */
	/******************************/
	
	// MOVE FROM ENTRANCE TO PORTFOLIO
	function entrancePortfolio() {
        // CHANGE BOOLEAN
        booleanClick = true;
        // SET TIMEOUT
		setTimeout(function() {
			body.className = "transition portfolio";
		}, 50);
        // SET TIMEOUT
		setTimeout(function() {
            body.className = "portfolio";
            entrance.style.display = "none";
            booleanClick = false;
		}, 600);
	}
	
	// MOVE FROM PORTFOLIO TO INFORMATION
	function portfolioInformation() {
        // CHANGE BOOLEAN
        booleanClick = true;
        booleanInformation = true;
        // CHANGE ELEMENT
        initFade.reset();
        // SET TIMEOUT
		setTimeout(function() {
			body.className = "transition information";
		}, 50);
		// SET TIMEOUT
		setTimeout(function() {
            body.className = "information";
            booleanClick = false;
		}, 600);
	}
	
	// MOVE FROM INFORMATION TO PORTFOLIO
	function informationPortfolio() {
        // CHANGE BOOLEAN
        booleanClick = true;
        booleanInformation = false;
        // SET TIMEOUT
		setTimeout(function() {
			body.className = "transition portfolio";
		}, 50);
		// SET TIMEOUT
		setTimeout(function() {
            body.className = "portfolio";
            booleanClick = false;
		}, 600);
	}
	
	// MOVE FROM PORTFOLIO TO LEGAL
	function portfolioLegal() {
		// CHANGE BOOLEAN
        booleanClick = true;
        booleanLegal = true;
        // CHANGE ELEMENT
        initFade.reset();
        // SET TIMEOUT
		setTimeout(function() {
			body.className = "transition legal";
		}, 50);
		// SET TIMEOUT
		setTimeout(function() {
            body.className = "legal";
            booleanClick = false;
		}, 600);
	}
	
	// MOVE FROM LEGAL TO PORTFOLIO
	function legalPortfolio() {
		// CHANGE BOOLEAN
        booleanClick = true;
        booleanLegal = false;
        // SET TIMEOUT
		setTimeout(function() {
			body.className = "transition portfolio";
		}, 50);
		// SET TIMEOUT
		setTimeout(function() {
            body.className = "portfolio";
            booleanClick = false;
		}, 600);
	}
	
	// MOVE FROM PORTFOLIO TO SHOWROOM
	function portfolioShowroom() {
		// CHANGE BOOLEAN
        booleanClick = true;
        booleanShowroom = true;
        // CHANGE ELEMENT
        initFade.reset();
        // SET TIMEOUT
		setTimeout(function() {
			body.className = "transition showroom";
		}, 50);
		// SET TIMEOUT
		setTimeout(function() {
            body.className = "showroom";
            booleanClick = false;
		}, 600);
	}
	
	// MOVE FROM SHOWROOM TO PORTFOLIO
	function showroomPortfolio() {
		// CHANGE BOOLEAN
        booleanClick = true;
        booleanShowroom = false;
        // SET TIMEOUT
		setTimeout(function() {
            if (item.video)
                initVideo.pause(item.id);
			body.className = "transition portfolio";
		}, 50);
		// SET TIMEOUT
		setTimeout(function() {
            booleanClick = false;
            body.className = "portfolio";
            initScroll.set(showroom,0);
            if (item.video)
                initVideo.reset(item.id);
		}, 600);
	}
    
    function showItem() {
        // ITEM SHOWROOM
        fetch(item.showroom)
            .then(response => {
                return response.text();
            })
            .then(text => {
                showroom.innerHTML = text;
                if (item.slider)
                    initSlider.init(item.id);
                portfolioShowroom();
            });
    }
	
	/******************************/
	/*       EVENT LISTENER       */
	/******************************/
    
	// EVENT LISTENER ENTER
	enter.addEventListener("click", function() {
        entrancePortfolio();
	});
    
    // EVENT LISTENER ENTER
	imprint.addEventListener("click", function() {
        portfolioLegal();
	});
	
	// EVENT LISTENER NAVIGATION LEFT
	navigationLeft.addEventListener("click", function() {
        if (!booleanClick) {
            if (!booleanInformation && !booleanShowroom && !booleanLegal && 
                navigationLeft.classList.contains("scrollPortfolio"))
                initScroll.move(portfolio,0,200);
            else if (booleanInformation &&
                     navigationLeft.classList.contains("scrollInformation"))
                initScroll.move(information,0,200);
            else if (booleanLegal &&
                     navigationLeft.classList.contains("scrollLegal"))
                initScroll.move(legal,0,200);
            else if (booleanShowroom &&
                     navigationLeft.classList.contains("scrollShowroom"))
                initScroll.move(showroom,0,200);
            else
                window.location.href = "";
        }
	});
    
    // EVENT LISTENER NAVIGATION RIGHT
    navigationRight.addEventListener("click", function() {
        if (!booleanClick) {
            if (!booleanInformation && !booleanShowroom && !booleanLegal)
                portfolioInformation();
            else if (booleanInformation)
                informationPortfolio();
            else if (booleanLegal)
                legalPortfolio();
            else if (booleanShowroom)
                showroomPortfolio();
        }
    });
    
    // EVENT LISTENER ITEM
    initCollection.get().forEach(function(e) {
        e.portfolio.addEventListener("click", function() {
            item = e;
            showItem();
        });
    });
    
    // EVENT LISTENER MEDIA QUERY
	if (matchMedia) {
        window.matchMedia("(max-width: 800px)").addListener(initFade.fade);
        window.matchMedia("(max-width: 1200px)").addListener(initFade.fade);
        window.matchMedia("(min-width: 2000px)").addListener(initFade.fade);
	}
	
}

/*
 * THIS FUNCTION INITIALIZES THE
 * PRELOAD OF THE WEBSITE
 */
function initPreload() {
	
	/******************************/
	/*          VARIABLE          */
	/******************************/
	
    var body = document.querySelector("body");
    var preload = document.getElementById("preload");
    var showroom = document.getElementById("showroom");
	var img = document.images;
	var index = 0;
    var timer = performance.now();
    
	/******************************/
	/*          FUNCTION          */
	/******************************/
	
	// GO THROUGH ALL IMAGES
	(function() {
        // SAFARI BUG
        /* if (!initDevice.safari() && !initDevice.mobile()) {
            // CONSOLE
            console.log("Appending Collection...");
            // APPEND COLLECTION
            initCollection.get().forEach(function(e) {
                // ITEM SHOWROOM
                fetch(e.showroom)
                    .then(response => {
                        return response.text();
                    })
                    .then(text => {
                        showroom.innerHTML += text;
                    });
            });
        } */
		// LOOP THROUGH IMAGES
		function loop() {
			// LOAD IMAGE
			var current = new Image();
			current.src = img[index].src;
			current.onload = function() {
				// UPDATE INDEX
				index++;
				// IF LAST IMAGE
				if (index == img.length) {
					// UPDATE PERCENTAGE
					percentage.innerHTML = "100%";
                    // CALCULATE TIMER
					console.log("Loading Time: "+Math.ceil(performance.now()-timer)+"ms");
                    // INITIALIZE LOGO
                    /* if (!initDevice.mobile()) {
                        // GET HEAD ELEMENT
                        var head = document.getElementsByTagName("head")[0];
                        // CREATE SCRIPT
                        var tween = document.createElement("script");
                        tween.defer = true;
                        tween.type = "text/javascript";
                        tween.src = "js/tween.js";
                        // CREATE SCRIPT
                        var three = document.createElement("script");
                        three.defer = true;
                        three.type = "text/javascript";
                        three.src = "js/three.js";
                        // APPEND SCRIPT
                        head.appendChild(tween);
                        head.appendChild(three);
                    } */
                    // SET TIMEOUT
					setTimeout(function() {
                        body.classList = "entrance";
                    }, 750);
                    // SET TIMEOUT
					setTimeout(function() {
                        preload.style.display = "none";
                    }, 1750);
                    // CLEAR SHOWROOM
                    showroom.innerHTML = "";
				}
				else {
					// UPDATE PERCENTAGE
					percentage.innerHTML = Math.floor(index/img.length*100)+"%";
					// CALL LOOP
					setTimeout(loop,10);
				}
			};
		}
		// INITIALIZE LOOP
		setTimeout(loop,50);
	}());
}

/*
 * THIS FUNCTION SETUPS THE
 * SCROLLING OF THE WEBSITE
 */
function initScroll() {
    
    /******************************/
	/*          VARIABLE          */
	/******************************/
    
    // ELEMENT
    var entrance = document.getElementById("entrance");
    var information = document.getElementById("information");
    var legal = document.getElementById("legal");
    var portfolio = document.getElementById("portfolio");
    var showroom = document.getElementById("showroom");
    // SCROLLBAR
    var scrollbarInformation = document.querySelector("#scrollbarInformation>div");
    var scrollbarLegal = document.querySelector("#scrollbarLegal>div");
    var scrollbarPortfolio = document.querySelector("#scrollbarPortfolio>div");
    var scrollbarShowroom = document.querySelector("#scrollbarShowroom>div");
    // NAVIGATION
    var navigationLeft = document.getElementById("navigationLeft");

    /******************************/
	/*          FUNCTION          */
	/******************************/
    
    function set(element,position) {
        // SET SCROLL TOP
        element.scrollTop = position;
    }
    
    function update(element,scrollbar) {
        // LOCAL
        var height = element.scrollHeight-element.clientHeight;
        var scroll = element.scrollTop;
        var percentage = Math.floor(scroll/height*1000)/1000;
        // BOUNDARY
        if (percentage <= 0 || isNaN(percentage))
            percentage = 0;
        if (percentage >= 1 && height !== 0)
            percentage = 1;
        // UPDATE SCROLLBAR
        scrollbar.style.transform = "scaleY("+percentage+")";
    }
    
    function check(element) {
        // LOCAL
        var height = element.scrollHeight-element.clientHeight;
        var scroll = element.scrollTop;
        // CHECK SCROLL
        if (scroll >= 600 || (scroll >= height-100 && height >= 300))
            return true;
        else
            return false;
    }
    
    function move(element,position,duration) {
        // IF AT END OF DURATION
        if (duration <= 0) {
            element.scrollTop = 0;
            return;
        }
        // CALCULATE VARIABLES
        var difference = position-element.scrollTop;
        var tick = difference/duration*10;
        // SET TIMEOUT
        setTimeout(function() {
            element.scrollTop = element.scrollTop+tick;
            if (element.scrollTop == position) 
                return;
            move(element,position,duration-10);
        }, 10);
    }
    
    /******************************/
	/*       EVENT LISTENER       */
	/******************************/
    
    // EVENT LISTENER INFORMATION
    information.addEventListener("scroll", function() {
        if(!initDevice.mobile())
            update(information,scrollbarInformation);
        if (check(information))
            navigationLeft.classList.add("scrollInformation");
        else
            navigationLeft.classList.remove("scrollInformation");
    });

    // EVENT LISTENER LEGAL
    legal.addEventListener("scroll", function() {
        if(!initDevice.mobile())
            update(legal,scrollbarLegal);
        if (check(legal))
            navigationLeft.classList.add("scrollLegal");
        else
            navigationLeft.classList.remove("scrollLegal");
    });

    // EVENT LISTENER PORTFOLIO
    portfolio.addEventListener("scroll", function() {
        if(!initDevice.mobile())
            update(portfolio,scrollbarPortfolio);
        if (check(portfolio))
            navigationLeft.classList.add("scrollPortfolio");
        else
            navigationLeft.classList.remove("scrollPortfolio");
    });

    // EVENT LISTENER SHOWROOM
    showroom.addEventListener("scroll", function() {
        if(!initDevice.mobile())
            update(showroom,scrollbarShowroom);
        if (check(showroom))
            navigationLeft.classList.add("scrollShowroom");
        else
            navigationLeft.classList.remove("scrollShowroom");
    });
    
    // ONLY FOR DESKTOP
    if(!initDevice.mobile()) {
        
        // EVENT LISTENER SELECTION
        selection.addEventListener("click", function(event) {
            setTimeout(function() {
                update(portfolio,scrollbarPortfolio);
            }, 50);
        });
        
        // EVENT LISTENER RESIZE
        window.addEventListener("resize", function() {
            update(information,scrollbarInformation);
            update(legal,scrollbarLegal);
            update(portfolio,scrollbarPortfolio);
            update(showroom,scrollbarShowroom);
        });
        
    }
    
    /******************************/
	/*           GLOBAL           */
	/******************************/
    
    initScroll.set = set;
    initScroll.check = check;
    initScroll.move = move;
    initScroll.update = update;
    
}

/*
 * THIS FUNCTION SETUPS THE
 * SELECTION OF THE PORTFOLIO
 */
function initSelection() {
	
	/******************************/
	/*          VARIABLE          */
	/******************************/
	
    var selection = document.getElementById("selection");
	var list = document.querySelectorAll("#selection>li");
	var all = document.querySelectorAll(".all");
	var digital = document.querySelectorAll(".digital");
	var film = document.querySelectorAll(".film");
	var art = document.querySelectorAll(".art");
	var current = 0;
	
	/******************************/
	/*          FUNCTION          */
	/******************************/
	
	// ADD SELECTION
	function add() {
		list[current].classList.add("current");
	}
    
	// REMOVE SELECTION
	function remove() {
		list[current].classList.remove("current");
	}
    
    // HIDE SELECTION
	function hide() {
		all.forEach(function(element) { 
            element.classList.add("none");
        });
	}
    
	// CHECK SELECTION
	function check(event) {
		// SELECTION ALL
		if (event.target.matches("#all")) {
			// SHOW SELECTION
			all.forEach(function(element) { 
				element.classList.remove("none");
			});
			// UPDATE
			remove();
			current = 0;
			add();
			// RETURN BOOLEAN
			return true;
		}
		// SELECTION DIGITAL
		if (event.target.matches("#digital")) {
			// HIDE
			hide();
			// SHOW SELECTION
			digital.forEach(function(element) { 
				element.classList.remove("none");
			});
			// UPDATE
			remove();
			current = 1;
			add();
			// RETURN BOOLEAN
			return true;
		}
		// SELECTION FILM
		if (event.target.matches("#film")) {
			// HIDE
			hide();
			// SHOW SELECTION
			film.forEach(function(element) { 
				element.classList.remove("none");
			});
			// UPDATE
			remove();
			current = 2;
			add();
			// RETURN BOOLEAN
			return true;
		}
		// SELECTION ART
		if (event.target.matches("#art")) {
			// HIDE
			hide();
			// SHOW SELECTION
			art.forEach(function(element) { 
				element.classList.remove("none");
			});
			// UPDATE
			remove();
			current = 3;
			add();
			// RETURN BOOLEAN
			return true;
		}
	}
	
	/******************************/
	/*       EVENT LISTENER       */
	/******************************/
	
	selection.addEventListener("click", function(event) {
		if (check(event))
			initFade.fade();
	});
	
}

/*
 * THIS FUNCTION SETUPS THE
 * SLIDES OF THE IMAGES
 */
function initSlider(element) {
	
	/******************************/
	/*          VARIABLE          */
	/******************************/
	
	var container,img,drag,left,right,bullet;
	var current,previous,next;
	var origin,destination;
	var booleanClick,booleanMouse;
	var timerClick;

	/******************************/
	/*          FUNCTION          */
	/******************************/
	
	// INITIALIZE
	function init(id) {
        // INITIALIZE
		container = document.querySelector("#"+id+">.slider>.bullet");
		img = Array.from(document.querySelectorAll("#"+id+">.slider>.slide"));
		drag = document.querySelector("#"+id+">.slider>.drag");
		left = document.querySelector("#"+id+">.slider>.click>.left");
		right = document.querySelector("#"+id+">.slider>.click>.right");
		// GO THROUGH IMAGES
		img.forEach(function(e) {
            e.classList.add("none");
			var div = document.createElement("div");
			container.appendChild(div);
		});
        // INITIALIZE
        bullet = Array.from(document.querySelectorAll("#"+id+">.slider>.bullet>div"));
        current = 0;
        booleanClick = false;
        booleanMouse = false;
        // EVENT LISTENER
		eventListener();
        // SET
        setSlide();
	}

	// SET ALL SLIDER ELEMENTS
	function setSlide() {
		// LIMIT BULLET
		for (var i = 0; i < bullet.length; i++) {
			if (i >= Math.floor(current/10)*10 && i < (Math.floor(current/10)*10)+10)
				bullet[i].classList.remove("none");
			else
				bullet[i].classList.add("none");
		}
		// UPDATE BULLET
		bullet[current].classList.add("current");
		// LEFT IMAGE
		if (current-1 < 0)
			previous = current-1+img.length;
		else
			previous = current-1;
		// RIGHT IMAGE
		if (current+1 >= img.length)
			next = current+1-img.length;
		else
			next = current+1;
		// SHOW IMAGE
		img[current].classList.remove("none");
		img[previous].classList.remove("none");
		img[next].classList.remove("none");
		// DEACTIVATE TRANSITION
		img[current].classList.remove("transition");
		img[previous].classList.remove("transition");
		img[next].classList.remove("transition");
		// INITIALIZE POSITION
		img[current].style.left = "0%";
		img[previous].style.left = "-100%";
		img[next].style.left = "100%";
	}
    
    // DRAG START SLIDE
	function startSlide(clientX) {
		// UPDATE ORIGIN
		origin = clientX;
	}

	// DRAG SLIDE
	function moveSlide(clientX) {
		// UPDATE DESTINATION
		destination = clientX;
		// CALCULATE DISTANCE
		var distance = destination-origin;
		// UPDATE IMAGE
		img[current].style.left = distance+"px";
		img[previous].style.left = "calc(-100% + "+distance+"px)";
		img[next].style.left = "calc(100% + "+distance+"px)";
	}

	// DRAG END SLIDE
	function endSlide(boolean) {
		// UPDATE DESTINATION
		if (!boolean)
			destination = origin;
		// ADD TRANSITION
		img[current].classList.add("transition");
		img[previous].classList.add("transition");
		img[next].classList.add("transition");
		// CALCULATE DISTANCE
		var distance = destination-origin;
		// SET TIMEOUT
		setTimeout(function() {
			// SLIDE LEFT
			if (distance >= 50) {
				// UPDATE IMAGE
				img[current].style.left = "100%";
				img[previous].style.left = "0%";
				img[next].style.left = "200%";
				// HIDE IMAGE
				img[next].classList.add("none");
				// UPDATE BULLET
				bullet[current].classList.remove("current");
				// DECREASE CURRENT
				current--;
				if (current < 0)
					current = current+img.length;
			}
			// SLIDE RIGHT
			else if (distance <= -50) {
				// UPDATE IMAGE
				img[current].style.left = "-100%";
				img[previous].style.left = "-200%";
				img[next].style.left = "0%";
				// HIDE IMAGE
				img[previous].classList.add("none");
				// UPDATE BULLET
				bullet[current].classList.remove("current");
				// INCREASE CURRENT
				current++;
				if (current >= img.length)
					current = current-img.length;
			}
			// SLIDE CURRENT
			else {
				// UPDATE IMAGE
				img[current].style.left = "0%";
				img[previous].style.left = "-100%";
				img[next].style.left = "100%";
			}
		}, 50);
		// SET TIMEOUT
		setTimeout(function() {
			// RESET SLIDESHOW
			setSlide();
		}, 300);
	}
	
	// CLICK NEXT SLIDE
	function nextSlide() {
		// ADD TRANSITION
		img[current].classList.add("transition");
		img[previous].classList.add("transition");
		img[next].classList.add("transition");
		// SET TIMEOUT
		setTimeout(function() {
			// UPDATE IMAGE
			img[current].style.left = "-100%";
			img[previous].style.left = "-200%";
			img[next].style.left = "0%";
			// HIDE IMAGE
			img[previous].classList.add("none");
			// UPDATE BULLET
			bullet[current].classList.remove("current");
			// INCREASE CURRENT
			current++;
			if (current >= img.length)
				current = current-img.length;
		},50);
		// SET TIMEOUT
		setTimeout(function() {
			// RESET SLIDESHOW
			setSlide();
		}, 300);
	}
	
	// CLICK PREVIOUS SLIDE
	function previousSlide() {
		// ADD TRANSITION
		img[current].classList.add("transition");
		img[previous].classList.add("transition");
		img[next].classList.add("transition");
		// SET TIMEOUT
		setTimeout(function() {
			img[current].style.left = "100%";
			img[previous].style.left = "0%";
			img[next].style.left = "200%";
			// HIDE IMAGE
			img[next].classList.add("none");
			// UPDATE BULLET
			bullet[current].classList.remove("current");
			// DECREASE CURRENT
			current--;
			if (current < 0)
				current = current+img.length;
		},50);
		// SET TIMEOUT
		setTimeout(function() {
			// RESET SLIDESHOW
			setSlide();
		}, 300);
	}

	/******************************/
	/*       EVENT LISTENER       */
	/******************************/
    
	// INITIALIZE ELEMENTS
	function eventListener() {
		        
		// EVENT LISTENER MOBILE
		if (initDevice.mobile()) {
            
			// EVENT LISTENER TOUCHSTART
			drag.addEventListener("touchstart", e => {
				if (!booleanMouse && !booleanClick && e.touches.length === 1) {
					booleanMouse = true;
					booleanClick = true;
					startSlide(e.touches[0].clientX);
					timerClick = performance.now();
				}
			});
			
            // EVENT LISTENER TOUCHMOVE
			drag.addEventListener("touchmove", e => {
				if (booleanMouse && e.touches.length === 1)
					moveSlide(e.touches[0].clientX);
			});
			
            // EVENT LISTENER TOUCHEND
			drag.addEventListener("touchend", e=> {
				if (booleanMouse) {
					booleanMouse = false;
					if (Math.ceil(performance.now()-timerClick) >= 300 && e.touches.length === 0)
						endSlide(true);
					else
						endSlide(false);
					setTimeout(function() {
						booleanClick = false;
					}, 300);
				}
			});
		
        }
        
        // EVENT LISTENER DESKTOP
        if(!initDevice.mobile()) {
			
            // EVENT LISTENER LEFT
			left.addEventListener("click", function() {
				if (!booleanClick) {
					booleanClick = true;
					previousSlide();
					setTimeout(function() {
						booleanClick = false;
					}, 300);
				}
			});
			
            // EVENT LISTENER RIGHT
			right.addEventListener("click", function() {
				if (!booleanClick) {
					booleanClick = true;
					nextSlide();
					/*next();*/
					setTimeout(function() {
						booleanClick = false;
					}, 300);
				}
			}); 
		
        }
        
		// EVENT LISTENER MOUSEDOWN
		drag.addEventListener("mousedown", e => {
			if (!booleanMouse && !booleanClick) {
				booleanMouse = true;
				booleanClick = true;
				timerClick = performance.now();
				startSlide(e.clientX);
			}
		});
		
		// EVENT LISTENER MOUSEMOVE
		drag.addEventListener("mousemove", e => {
			if (booleanMouse)
				moveSlide(e.clientX);
		});
		
		// EVENT LISTENER MOUSEUP
		drag.addEventListener("mouseup", e=> {
			if (booleanMouse) {
				booleanMouse = false;
				if (Math.ceil(performance.now()-timerClick) >= 300)
					endSlide(true);
				else
					endSlide(false);
				setTimeout(function() {
					booleanClick = false;
				}, 300);
			}
		});
		
		// EVENT LISTENER MOUSEOUT
		drag.addEventListener("mouseout", e=> {
			if (booleanMouse) {
				booleanMouse = false;
				if (Math.ceil(performance.now()-timerClick) >= 300)
					endSlide(true);
				else
					endSlide(false);
				setTimeout(function() {
					booleanClick = false;
				}, 300);
			}
		});
	}
	
	/******************************/
	/*           GLOBAL           */
	/******************************/
    
	initSlider.init = init;
	
}

/*
 * THIS FUNCTION SETUPS THE
 * VIDEO OF THE WEBSITE
 */
function initVideo() {
	
    /******************************/
	/*          VARIABLE          */
	/******************************/
    
    var video;
    
	/******************************/
	/*          FUNCTION          */
	/******************************/
    
    function pause(id) {
        // UPDATE VIDEO
		video = document.querySelector("#"+id+">.video>video");
         // IF VIDEO IS NOT PAUSED
        if (!video.paused)
            video.pause();
    }
    
	function reset(id) {
		// UPDATE VIDEO
		video = document.querySelector("#"+id+">.video>video");
        // IF VIDEO IS NOT AT BEGINNING
        if (video.currentTime !== 0)
			video.currentTime = 0;
	}
	
	/******************************/
	/*       EVENT LISTENER       */
	/******************************/
	
	// GLOBAL FUNCTION
    initVideo.pause = pause;
	initVideo.reset = reset;
	
}

/*
 * EXECUTES IF DOM IS LOADED
 */
addEventListener("DOMContentLoaded", function() {
    initCollection();
    initDevice();
    initPreload();
});

/*
 * EXECUTES IF PAGE IS LOADED
 */
window.onload = function() {
    initFade();
	initNavigation();
    initScroll();
    initSelection();
    initSlider();
    initVideo();
};