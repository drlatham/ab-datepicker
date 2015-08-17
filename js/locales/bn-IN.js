(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "তারিখ নির্বাচন করুন ...",
		        "buttonLabel": "দেখার জন্য ক্লিক করুন অথবা Enter কী চাপুন বা spacebar ক্যালেন্ডার খুলুন",
		        "prevButtonLabel": "আগের মাসের যান",
		        "nextButtonLabel": "আগামী মাসে যান",
		        "closeButtonTitle": "ঘনিষ্ঠ",
		        "closeButtonLabel": "ক্যালেন্ডারে বন্ধ",
		        "prevMonthButtonLabel": "পূর্ববর্তী বছরের যান",
		        "prevYearButtonLabel": "আগের বিশ বছর যান",
		        "nextMonthButtonLabel": "আগামী বছরের যান",
		        "nextYearButtonLabel": "পরবর্তী বিশ বছর যান",
		        "changeMonthButtonLabel": "দেখার জন্য ক্লিক করুন অথবা Enter কী চাপুন বা spacebar মাস পরিবর্তন",
		        "changeYearButtonLabel": "দেখার জন্য ক্লিক করুন অথবা Enter কী চাপুন বা spacebar বছর পরিবর্তন",
		        "changeRangeButtonLabel": "দেখার জন্য ক্লিক করুন অথবা পরবর্তী বিশ বছর যেতে কী বা spacebar Enter চাপুন",
		        "calendarHelp": "- তীর এবং নিম্নমুখী তীর - যথাক্রমে আগের বা পরের সপ্তাহে সপ্তাহে একই দিন চলে যায়. মাস শেষে পৌঁছে করা হয়, তাহলে যথাযথ পরের বা আগের মাসের মধ্যে চলতে থাকে.\r\n- বাম তীর এবং ডান তীর - একটি সন্ততি, পরের এক দিন অগ্রিম. দৃশ্যরূপে ফোকাস দিন দিন থেকে সরানো এবং দিনের গ্রিড সারি সারি থেকে গোপন করা হয়.\r\n- কন্ট্রোল + Page Up - এর আগের বছর একই তারিখ থেকে মানসম্পন্ন.\r\n- কন্ট্রোল + Page Down - আগামী বছরের মধ্যে একই তারিখ থেকে মানসম্পন্ন.\r\n- হোম - বর্তমান মাসের প্রথম দিনে চলে আসে.\r\n- শেষ - বর্তমান মাসের শেষ দিন চলে আসে.\r\n- পৃষ্ঠা পোষাক - আগের মাসে একই তারিখ থেকে মানসম্পন্ন.\r\n- পৃষ্ঠা নিচে - আগামী মাসে একই তারিখ থেকে মানসম্পন্ন.\r\n- লিখুন বা Espace - ক্যালেন্ডার বন্ধ হয়ে যায় ও নির্বাচিত তারিখ যুক্ত টেক্সট বক্সে দেখানো হয়.\r\n- এস্কেপ - কোনো পদক্ষেপ ছাড়াই ক্যালেন্ডার বন্ধ হয়ে যায়."
		    },
		    "month_names": [
		        "জানুয়ারী",
		        "ফেব্রুয়ারী",
		        "মার্চ",
		        "এপ্রিল",
		        "মে",
		        "জুন",
		        "জুলাই",
		        "আগস্ট",
		        "সেপ্টেম্বর",
		        "অক্টোবর",
		        "নভেম্বর",
		        "ডিসেম্বর"
		    ],
		    "month_names_abbreviated": [
		        "জানুয়ারী",
		        "ফেব্রুয়ারী",
		        "মার্চ",
		        "এপ্রিল",
		        "মে",
		        "জুন",
		        "জুলাই",
		        "আগস্ট",
		        "সেপ্টেম্বর",
		        "অক্টোবর",
		        "নভেম্বর",
		        "ডিসেম্বর"
		    ],
		    "month_names_narrow": [
		        "জা",
		        "ফে",
		        "মা",
		        "এ",
		        "মে",
		        "জুন",
		        "জু",
		        "আ",
		        "সে",
		        "অ",
		        "ন",
		        "ডি"
		    ],
		    "day_names": [
		        "রবিবার",
		        "সোমবার",
		        "মঙ্গলবার",
		        "বুধবার",
		        "বৃহস্পতিবার",
		        "শুক্রবার",
		        "শনিবার"
		    ],
		    "day_names_abbreviated": [
		        "রবি",
		        "সোম",
		        "মঙ্গল",
		        "বুধ",
		        "বৃহস্পতি",
		        "শুক্র",
		        "শনি"
		    ],
		    "day_names_short": [
		        "রঃ",
		        "সোঃ",
		        "মঃ",
		        "বুঃ",
		        "বৃঃ",
		        "শুঃ",
		        "শোঃ"
		    ],
		    "day_names_narrow": [
		        "র",
		        "সো",
		        "ম",
		        "বু",
		        "বৃ",
		        "শু",
		        "শ"
		    ],
		    "day_periods": {
		        "am": "পূর্বাহ্ণ",
		        "noon": "দুপুর",
		        "pm": "অপরাহ্ণ"
		    },
		    "day_periods_abbreviated": {
		        "am": "পূর্বাহ্ণ",
		        "noon": "দুপুর",
		        "pm": "অপরাহ্ণ"
		    },
		    "day_periods_narrow": {
		        "am": "পূর্বাহ্ণ",
		        "noon": "দুপুর",
		        "pm": "অপরাহ্ণ"
		    },
		    "quarter_names": [
		        "ত্রৈমাসিক",
		        "ষাণ্মাসিক",
		        "তৃতীয় চতুর্থাংশ",
		        "চতুর্থ ত্রৈমাসিক"
		    ],
		    "quarter_names_abbreviated": [
		        "Q1",
		        "Q2",
		        "Q3",
		        "Q4"
		    ],
		    "quarter_names_narrow": [
		        "১",
		        "২",
		        "৩",
		        "৪"
		    ],
		    "era_names": [
		        "খ্রিস্টপূর্ব",
		        "খৃষ্টাব্দ"
		    ],
		    "era_names_abbreviated": [
		        "খ্রিস্টপূর্ব",
		        "খৃষ্টাব্দ"
		    ],
		    "era_names_narrow": [
		        "খ্রিস্টপূর্ব",
		        "খৃষ্টাব্দ"
		    ],
		    "full_format": "EEEE, d MMMM, y",
		    "long_format": "d MMMM, y",
		    "medium_format": "d MMM, y",
		    "short_format": "d/M/yy",
		    "firstday_of_week": 0
		};
	}
})();