 //http://127.0.0.1:5500/astrology/index.html?first=jeevan&second=bahaddur+&day=26&month=3&YEAR=2006


 
 const zodiacSigns = [
    "Aries",      // March 21 - April 19
    "Taurus",     // April 20 - May 20
    "Gemini",     // May 21 - June 20
    "Cancer",     // June 21 - July 22
    "Leo",        // July 23 - August 22
    "Virgo",      // August 23 - September 22
    "Libra",      // September 23 - October 22
    "Scorpio",    // October 23 - November 21
    "Sagittarius",// November 22 - December 21
    "Capricorn",  // December 22 - January 19
    "Aquarius",   // January 20 - February 18
    "Pisces"      // February 19 - March 20
];

const predictions = [
    "You will become a corruptil",
    "Success is just around the corner for you.",
    "Your dream job is closer than you think.",
    "Expect the unexpected-great things are coming.",
    "You will travel the world in the next few years.",
    "A big opportunity will knock on your door soon.",
    "Your hard work will pay off in ways you can't imagine.",
    "You will make a difference in someone's life.",
    "A surprising adventure is coming your way.",
    "Great things come to those who wait—your time is coming.",
    "Your creativity will lead to great success.",
    "A life-changing moment is just ahead.",
    "Get ready for some exciting news soon.",
    "A financial breakthrough is in your future.",
    "You will find happiness in the smallest things.",
    "Your patience will lead to big rewards.",
    "Your zodiac complement brings unexpected harmony.",
    "Aries and Libra will align in your favor this month.",
    "Taurus and Scorpio balance brings you peace.",
    "Gemini and Sagittarius complement your next move.",
    "Cancer and Capricorn energy surrounds you today.",
    "Leo and Aquarius form a powerful connection for you.",
    "Virgo and Pisces complete your spiritual journey.",
    "The stars complement your path forward.",
    "Your opposite sign reveals a hidden opportunity.",
    "Universal complements are working in your favor.",
    "A complementary soul will enter your life soon.",
    "Your elemental match brings good fortune.",
    "The cosmos balances your energy this week.",
    "Look for your mirror sign—they hold the key.",
    "Perfect alignment of complementary forces awaits you."
];

const victimCardCompliments = [
    "You always do good for others, but they don't appreciate it.",
    "You give so much, but rarely get anything in return.",
    "Your kindness often goes unnoticed, but it's truly remarkable.",
    "You always put others first, even when they don't deserve it.",
    "You sacrifice so much, yet people rarely acknowledge it.",
    "You have a heart of gold, but others take it for granted.",
    "You're always there for everyone, but they're not always there.",
    "You work so hard, yet your efforts often go unrecognized.",
    "You care deeply, even when others don't reciprocate.",
    "You forgive so easily, even when people don't deserve it.",
    "You give people the benefit of the doubt, but they rarely receive it.",
    "You stand by people in their tough times, but they forget to help them.",
    "You always try to make peace, even when others blame you.",
    "You handle so much pressure, yet no one sees your strength.",
    "You give so much love, but people don't value it enough.",
    "You're always the one who apologizes first, even when you're not wrong.",
    "You carry burdens alone so others don't have to suffer.",
    "You've been betrayed before, yet you still trust people.",
    "You give second chances like they're free, but they cost you dearly.",
    "You hide your pain behind a smile so others feel comfortable."
];
// Size: 20
const compliments = [
    "You have a great sense of humor.",
    "Your smile lights up the room.",
    "You bring out the best in people.",
    "You're an incredibly thoughtful person.",
    "You have a heart of gold.",
    "Your creativity is inspiring.",
    "Your taste for photography is undeniable.",
    "Your kindness is contagious.",
    "You have an amazing ability to connect with others.",
    "You're so knowledgeable about so many things.",
    "Your determination is admirable.",
    "You're a great listener.",
    "You make the world a better place.",
    "Your positivity is infectious.",
    "You have an eye for detail.",
    "You're stronger than you realize.",
    "Your energy is absolutely uplifting.",
    "You have a beautiful soul.",
    "You're a true original.",
    "Your wisdom is beyond your years.",
    "You make people feel seen and heard.",
    "You handle challenges with grace.",
    "Your passion inspires everyone around you.",
    "You're a rare and genuine friend.",
    "You have an incredible work ethic.",
    "Your presence alone brings comfort.",
    "You see the good in every situation.",
    "You're勇敢 than you give yourself credit for.",
    "Your words have healing power.",
    "You light up every room you enter.",
    "You are truly one of a kind."
];
// Size: 31
const recommendations = [
    "Feed a street dog and spread kindness.",
    "Plant a tree and nurture it.",
    "Volunteer at a local shelter or community center.",
    "Start your day with meditation for a peaceful mind.",
    "Write down three things you're grateful for daily.",
    "Spend time with your family and cherish those moments.",
    "Help someone in need, even in small ways.",
    "Read a book that inspires you to grow.",
    "Exercise regularly to keep your body healthy.",
    "Donate clothes you don't wear to charity.",
    "Cook a meal for someone and share the joy of food.",
    "Smile at strangers and brighten their day.",
    "Learn a new skill or hobby that excites you.",
    "Reduce your plastic use to help the environment.",
    "Take a break from critical media for a day and enjoy the peace.",
    "Call an old friend you haven't spoken to in months.",
    "Practice deep breathing for 5 minutes every morning.",
    "Write a handwritten letter to someone you appreciate.",
    "Wake up early to watch the sunrise.",
    "Drink more water and take care of your body.",
    "Forgive someone who hurt you — for your own peace.",
    "Take a walk in nature without your phone.",
    "Listen to a podcast that teaches you something new.",
    "Save a small amount of money each day.",
    "Compliment a stranger genuinely.",
    "Organize one messy corner of your home.",
    "Try a new recipe from a different culture.",
    "Turn off notifications for an hour before bed.",
    "Write down one goal and take the first step toward it.",
    "Send a thank you message to someone who helped you.",
    "Be kind to yourself — you're doing better than you think."
];
// Size: 31

const form=document.getElementById('astro');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name=document.getElementById('first').value;
    const last=document.getElementById('second').value;
    const day=document.getElementById('day').value;
    const month=(document.getElementById('month')).value;
    const year=(document.getElementById('year')).value;

    const text= ` Hii ${name} ${last} ,Your Zodiac Signs ${zodiacSigns[month-1]} 
     . ${compliments[(day-1)]} . ${victimCardCompliments[(year)%20]} .${recommendations[(day*month)%30]}.
     ${predictions[(name.length*last.length)%20]} `;

     document.getElementById('result').textContent=text;
})