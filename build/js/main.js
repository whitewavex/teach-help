$(document).ready(function(){$(".categories__close").click(function(){$(".categories__header").animate({opacity:0},500),$(".categories__items").animate({opacity:0},500),$(this).fadeOut(200,function(){$(".categories").animate({width:2,padding:0,"margin-left":0},500,function(){$(".categories").animate({top:"150%","margin-top":0},500,function(){$(".categories__header").animate({"margin-left":-100}),$(".categories__items").animate({"margin-right":-100},500)}),$(".overlay").fadeOut(500)})})}),$(".menu").click(function(){$(".categories__items").css("display","block");var i,e,a,t=$(window).width(),n=-$(".categories").height()/2;t>=1200?(i=1100,e=-550,a=30):t<1200&&t>=992?(i=970,e=-485,a=30):t<992&&t>=767?(e=-(i=t-30)/2,a=30):t<767&&t>=575?(e=-(i=t-30)/2,a="30 10 10 10"):t<575&&t>=480?(e=-(i=t-8)/2,a="12"):(e=-(i=t-30)/2,a="30 10 10 10"),$(".overlay").fadeTo(500,.6),$(".categories").animate({"margin-top":n,top:"50%"},500,function(){$(".categories").animate({"margin-left":e,padding:a,width:i},500,function(){$(".categories__header").animate({opacity:1,"margin-left":0},500),$(".categories__items").animate({opacity:1,"margin-right":0},500),$(".categories__close").fadeIn(500)})})}),$(".nav-mobile").click(function(){$(this).toggleClass("nav-mobile_active"),$(".burger-menu").toggleClass("burger-menu_open"),$("html,body").toggleClass("not-scroll")}),$(".article__link").click(function(){$(this).children(".article__icon").hasClass("article__icon_down")?$(this).children(".article__icon").removeClass("article__icon_down"):($(".article__icon").removeClass("article__icon_down"),$(this).children(".article__icon").addClass("article__icon_down"))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImFuaW1hdGUiLCJvcGFjaXR5IiwidGhpcyIsImZhZGVPdXQiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4tbGVmdCIsInRvcCIsIm1hcmdpbi10b3AiLCJtYXJnaW4tcmlnaHQiLCJjc3MiLCJ3aWR0aENhdGVnb3J5IiwibWFyZ2luTGVmdCIsInBhZGRpbmdBbGwiLCJ3aW5kb3ciLCJtYXJnaW5Ub3AiLCJoZWlnaHQiLCJmYWRlVG8iLCJmYWRlSW4iLCJ0b2dnbGVDbGFzcyIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQUdkRixFQUFFLHNCQUFzQkcsTUFBTSxXQUMxQkgsRUFBRSx1QkFBdUJJLFNBQ3JCQyxRQUFTLEdBQ1YsS0FDSEwsRUFBRSxzQkFBc0JJLFNBQ3BCQyxRQUFTLEdBQ1YsS0FDSEwsRUFBRU0sTUFBTUMsUUFBUSxJQUFLLFdBQ2pCUCxFQUFFLGVBQWVJLFNBQ2JJLE1BQU8sRUFDUEMsUUFBUyxFQUNUQyxjQUFlLEdBQ2hCLElBQUssV0FDSlYsRUFBRSxlQUFlSSxTQUNkTyxJQUFLLE9BQ0pDLGFBQWMsR0FDZixJQUFLLFdBQ0paLEVBQUUsdUJBQXVCSSxTQUN0Qk0sZUFBZ0IsTUFFbkJWLEVBQUUsc0JBQXNCSSxTQUNyQlMsZ0JBQWlCLEtBQ2pCLE9BRVBiLEVBQUUsWUFBWU8sUUFBUSxXQU1sQ1AsRUFBRSxTQUFTRyxNQUFNLFdBQ2JILEVBQUUsc0JBQXNCYyxJQUFJLFVBQVcsU0FDdkMsSUFBSUMsRUFDQUMsRUFDQUMsRUFDQVQsRUFBUVIsRUFBRWtCLFFBQVFWLFFBRWxCVyxHQURTbkIsRUFBRSxlQUFlb0IsU0FDTixFQUNwQlosR0FBUyxNQUNUTyxFQUFnQixLQUNoQkMsR0FBYyxJQUNkQyxFQUFhLElBRVJULEVBQVEsTUFBUUEsR0FBUyxLQUM5Qk8sRUFBZ0IsSUFDaEJDLEdBQWMsSUFDZEMsRUFBYSxJQUVSVCxFQUFRLEtBQU9BLEdBQVMsS0FFN0JRLElBREFELEVBQWdCUCxFQUFNLElBQ00sRUFDNUJTLEVBQWEsSUFFUlQsRUFBUSxLQUFPQSxHQUFTLEtBRTdCUSxJQURBRCxFQUFnQlAsRUFBTSxJQUNNLEVBQzVCUyxFQUFhLGVBRVJULEVBQVEsS0FBT0EsR0FBUyxLQUU3QlEsSUFEQUQsRUFBZ0JQLEVBQU0sR0FDTSxFQUM1QlMsRUFBYSxPQUliRCxJQURBRCxFQUFnQlAsRUFBTSxJQUNNLEVBQzVCUyxFQUFhLGVBRWpCakIsRUFBRSxZQUFZcUIsT0FBTyxJQUFLLElBQzFCckIsRUFBRSxlQUFlSSxTQUNiUSxhQUFjTyxFQUNkUixJQUFLLE9BQ04sSUFBSyxXQUNKWCxFQUFFLGVBQWVJLFNBQ2JNLGNBQWVNLEVBQ2ZQLFFBQVNRLEVBQ1RULE1BQU9PLEdBQ1IsSUFBSyxXQUNKZixFQUFFLHVCQUF1QkksU0FDckJDLFFBQVMsRUFDVEssY0FBZSxHQUNoQixLQUNIVixFQUFFLHNCQUFzQkksU0FDcEJDLFFBQVMsRUFDVFEsZUFBZ0IsR0FDakIsS0FDSGIsRUFBRSxzQkFBc0JzQixPQUFPLFdBTTNDdEIsRUFBRSxlQUFlRyxNQUFNLFdBQ25CSCxFQUFFTSxNQUFNaUIsWUFBWSxxQkFDcEJ2QixFQUFFLGdCQUFnQnVCLFlBQVksb0JBQzlCdkIsRUFBRSxhQUFhdUIsWUFBWSxnQkFJL0J2QixFQUFFLGtCQUFrQkcsTUFBTSxXQUNsQkgsRUFBRU0sTUFBTWtCLFNBQVMsa0JBQWtCQyxTQUFTLHNCQUM1Q3pCLEVBQUVNLE1BQU1rQixTQUFTLGtCQUFrQkUsWUFBWSx1QkFHL0MxQixFQUFFLGtCQUFrQjBCLFlBQVksc0JBQ2hDMUIsRUFBRU0sTUFBTWtCLFNBQVMsa0JBQWtCRyxTQUFTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIFxyXG4vLyAgICBDTE9TRSBDQVRFR09SSUVTXHJcbiAgICAkKCcuY2F0ZWdvcmllc19fY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuY2F0ZWdvcmllc19faGVhZGVyJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICQoJy5jYXRlZ29yaWVzX19pdGVtcycpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAkKHRoaXMpLmZhZGVPdXQoMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmNhdGVnb3JpZXMnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6IDBcclxuICAgICAgICAgICAgfSwgNTAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoJy5jYXRlZ29yaWVzJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICB0b3A6ICcxNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLXRvcCc6IDBcclxuICAgICAgICAgICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNhdGVnb3JpZXNfX2hlYWRlcicpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6IC0xMDAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmNhdGVnb3JpZXNfX2l0ZW1zJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1yaWdodCc6IC0xMDAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH0pOyAvLyBlbmQgYW5pbWF0ZSAyXHJcbiAgICAgICAgICAgICAgICAkKCcub3ZlcmxheScpLmZhZGVPdXQoNTAwKTtcclxuICAgICAgICAgICAgfSk7IC8vIGVuZCBhbmltYXRlXHJcbiAgICAgICAgfSk7IC8vIGVuZCBmYWRlT3V0XHJcbiAgICB9KTsgLy8gZW5kIGNsaWNrXHJcbiAgICBcclxuLy8gICAgT1BFTiBDQVRFR09SSUVTXHJcbiAgICAkKCcubWVudScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5jYXRlZ29yaWVzX19pdGVtcycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIHZhciB3aWR0aENhdGVnb3J5O1xyXG4gICAgICAgIHZhciBtYXJnaW5MZWZ0O1xyXG4gICAgICAgIHZhciBwYWRkaW5nQWxsO1xyXG4gICAgICAgIHZhciB3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSAkKCcuY2F0ZWdvcmllcycpLmhlaWdodCgpO1xyXG4gICAgICAgIHZhciBtYXJnaW5Ub3AgPSAtaGVpZ2h0LzI7XHJcbiAgICAgICAgaWYoIHdpZHRoID49IDEyMDAgKSB7XHJcbiAgICAgICAgICAgIHdpZHRoQ2F0ZWdvcnkgPSAxMTAwO1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0ID0gLTU1MDtcclxuICAgICAgICAgICAgcGFkZGluZ0FsbCA9IDMwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCB3aWR0aCA8IDEyMDAgJiYgd2lkdGggPj0gOTkyICkge1xyXG4gICAgICAgICAgICB3aWR0aENhdGVnb3J5ID0gOTcwO1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0ID0gLTQ4NTtcclxuICAgICAgICAgICAgcGFkZGluZ0FsbCA9IDMwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCB3aWR0aCA8IDk5MiAmJiB3aWR0aCA+PSA3NjcgKSB7XHJcbiAgICAgICAgICAgIHdpZHRoQ2F0ZWdvcnkgPSB3aWR0aC0zMDtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdCA9IC13aWR0aENhdGVnb3J5LzI7XHJcbiAgICAgICAgICAgIHBhZGRpbmdBbGwgPSAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiggd2lkdGggPCA3NjcgJiYgd2lkdGggPj0gNTc1ICkge1xyXG4gICAgICAgICAgICB3aWR0aENhdGVnb3J5ID0gd2lkdGgtMzA7XHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQgPSAtd2lkdGhDYXRlZ29yeS8yO1xyXG4gICAgICAgICAgICBwYWRkaW5nQWxsID0gJzMwIDEwIDEwIDEwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiggd2lkdGggPCA1NzUgJiYgd2lkdGggPj0gNDgwICkge1xyXG4gICAgICAgICAgICB3aWR0aENhdGVnb3J5ID0gd2lkdGgtODtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdCA9IC13aWR0aENhdGVnb3J5LzI7XHJcbiAgICAgICAgICAgIHBhZGRpbmdBbGwgPSAnMTInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2lkdGhDYXRlZ29yeSA9IHdpZHRoLTMwO1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0ID0gLXdpZHRoQ2F0ZWdvcnkvMjtcclxuICAgICAgICAgICAgcGFkZGluZ0FsbCA9ICczMCAxMCAxMCAxMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy5vdmVybGF5JykuZmFkZVRvKDUwMCwgMC42KTtcclxuICAgICAgICAkKCcuY2F0ZWdvcmllcycpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6IG1hcmdpblRvcCxcclxuICAgICAgICAgICAgdG9wOiAnNTAlJ1xyXG4gICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5jYXRlZ29yaWVzJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnbWFyZ2luLWxlZnQnOiBtYXJnaW5MZWZ0LFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogcGFkZGluZ0FsbCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aENhdGVnb3J5XHJcbiAgICAgICAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2F0ZWdvcmllc19faGVhZGVyJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLWxlZnQnOiAwXHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNhdGVnb3JpZXNfX2l0ZW1zJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLXJpZ2h0JzogMFxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICQoJy5jYXRlZ29yaWVzX19jbG9zZScpLmZhZGVJbig1MDApOyAgICAgICBcclxuICAgICAgICAgICAgfSk7IC8vIGVuZCBhbmltYXRlIDJcclxuICAgICAgICB9KTsgLy8gZW5kIGFuaW1hdGVcclxuICAgIH0pOyAvLyBlbmQgY2xpY2tcclxuICAgIFxyXG4vLyAgICBOQVYtTU9CSUxFXHJcbiAgICAkKCcubmF2LW1vYmlsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ25hdi1tb2JpbGVfYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmJ1cmdlci1tZW51JykudG9nZ2xlQ2xhc3MoJ2J1cmdlci1tZW51X29wZW4nKTtcclxuICAgICAgICAkKCdodG1sLGJvZHknKS50b2dnbGVDbGFzcygnbm90LXNjcm9sbCcpO1xyXG4gICAgfSk7IC8vIGVuZCBjbGlja1xyXG4gICAgXHJcbi8vICAgIFRVUk4gQVJST1cgQUNDT1JESU9OXHJcbiAgICAkKCcuYXJ0aWNsZV9fbGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCAkKHRoaXMpLmNoaWxkcmVuKCcuYXJ0aWNsZV9faWNvbicpLmhhc0NsYXNzKCdhcnRpY2xlX19pY29uX2Rvd24nKSApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmFydGljbGVfX2ljb24nKS5yZW1vdmVDbGFzcygnYXJ0aWNsZV9faWNvbl9kb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuYXJ0aWNsZV9faWNvbicpLnJlbW92ZUNsYXNzKCdhcnRpY2xlX19pY29uX2Rvd24nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmFydGljbGVfX2ljb24nKS5hZGRDbGFzcygnYXJ0aWNsZV9faWNvbl9kb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7IC8vIGVuZCBjbGlja1xyXG4gICAgXHJcbiAgICBcclxufSk7Il19
