var ShepherdDog = function ()
{

	this.init = function ()
	{
		var self = this;

		self.setupEventHandlers();
	};

	this.setupEventHandlers = function ()
	{
		var self = this;

		$(".menu-button-container").find("a").on("click", function ()
		{
			//$(".main-nav-list-container").slideToggle();
			$(".main-nav-list-container").css({ "z-index": -1 });

			if($(".main-nav-list-container").css("visibility") === "visible")
			{
				$(".main-nav-list-container").animate({ "height": "0" }, 300, function () {
					$(".main-nav-list-container").css({ visibility: "hidden" });
				});

			}
			else
			{
				$(".main-nav-list-container").animate({ scrollLeft: "150px" }, 0);

				$(".main-nav-list-container").css({ visibility: "visible" });

				$(".main-nav-list-container").animate({ "height": "50px" }, 300);

				if(window.location.href.toLowerCase().indexOf("pricing") !== -1)
				{
					$(".main-nav-list-container").animate({ scrollLeft: "125px" }, 300);
				}
				else if(window.location.href.toLowerCase().indexOf("who-we-are") !== -1)
				{
					$(".main-nav-list-container").animate({ scrollLeft: "300px" }, 300);
				}
				else if(window.location.href.toLowerCase().indexOf("our-work") !== -1)
				{
					$(".main-nav-list-container").animate({ scrollLeft: "300px" }, 300);
				}
				else if(window.location.href.toLowerCase().indexOf("blog") !== -1)
				{
					$(".main-nav-list-container").animate({ scrollLeft: "300px" }, 300);
				}
				else
				{
					$(".main-nav-list-container").animate({ scrollLeft: "0" }, 300);
				}
			}
		});

		var $pagers = $(".pager-container li");

		$pagers.on("click", function ()
		{
			if ($(this).hasClass("selected")) { return false; }

			$pagers.each(function () {
				$(this).removeClass("selected");
			});

			$(this).addClass("selected");

			var index = $(this).index();
			var $selectedTestimonial = $("div.testimonial-list-container").find("li").eq(index);

			var testimonialPaddingLeft = +$selectedTestimonial.css("padding-left").replace("px", "");
			var testimonialPaddingRight = +$selectedTestimonial.css("padding-right").replace("px", "");
			var testimonialMarginLeft = +$selectedTestimonial.css("margin-left").replace("px", "");
			var testimonialMarginRight = +$selectedTestimonial.css("margin-right").replace("px", "");
			var testimonialWidth = $selectedTestimonial.width() + testimonialMarginLeft + testimonialMarginRight + testimonialPaddingLeft + testimonialPaddingRight;

			$("div.testimonial-list-container").animate({ "scrollLeft": testimonialWidth * index });
		});
	};
};

var shepherdDog = new ShepherdDog();

$(document).ready(function ()
{
	shepherdDog.init();
});