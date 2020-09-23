
var address;
var userAddress;
function firstButtonHover(){
	document.getElementById("addressSubmit").style.display = 'inline';
	document.getElementById("addressBox").style.display = 'inline';
	document.getElementById("b1Picture").style.display = 'inline';
	document.getElementById("d1").innerHTML = "Type in your address and click submit to find your nearest voting location" +
	'<br>' + "*note: the current website rendition only contains voting locations in Plantation, FL.";	
	// when the mouse hovers over the top button, the address box appears.
}
function firstButtonLeave(){
	document.getElementById("addressSubmit").style.display = 'none';
	document.getElementById("addressBox").style.display = 'none';
	document.getElementById("b1Picture").style.display = 'none';
	document.getElementById("d1").innerHTML = "";	
	// when the mouse leaves the top button, the address box disappears.
}
function firstButton(){
	secondScreen();
	document.getElementById("votingLocation").style.display = 'inline';
	document.getElementById("pageInfo").innerHTML = "";
	initMap();
}
function secondButtonHover(){
	document.getElementById("b2Picture").style.display = 'inline';
	document.getElementById("dropdown1").style.display = 'inline';
	document.getElementById("dropdown2").style.display = 'inline';
	document.getElementById("d2").innerHTML = "Click on each button to learn about the upcoming elections (2016 Elections)";	
}
function secondButtonLeave(){
	document.getElementById("b2Picture").style.display = 'none';
	document.getElementById("dropdown1").style.display = 'none';
	document.getElementById("dropdown2").style.display = 'none';
	document.getElementById("d2").innerHTML = "";	
}

function secondScreen(){
	var hideButtons = document.querySelector("#buttons");
	buttons.style.display = "none";
	var showSecWindow = document.querySelector("#secondWindow");
	secondWindow.style.display = "inline-block";
}
function buttonsBack() {
	var showButtons = document.querySelector("#buttons");
	buttons.style.display = "inline";
	var hideSecWindow = document.querySelector("#secondWindow");
	secondWindow.style.display = "none";
	var hideLocation = document.querySelector("#votingLocation");
	votingLocation.style.display = "none";
	var showBottom = document.querySelector("#bottomInformation");
	bottomInformation.style.display = "inline";
	document.getElementById("pageInfo").innerHTML = "";
}
function test(){
	window.alert("TEST");
}

var donaldTrump = {
	name: "Donald Trump", 
	office: "President", 
	party: "Republican", 
	immigration: '<li>'+"Wants to deport all 11 million undocumented immigrants"+'</li>'+'<li>'+"Wants to build a wall along the U.S.-Mexican border"+'</li>'+'<li>'+"Believes Muslims should face extra immigration hurdles"+'</li>',
	gunControl: '<li>'+"Doesn’t support increased gun control measures"+'</li>'+'<li>'+"Doesn’t support increased background checks"+'</li>'+'<li>'+"Doesn’t support an assault-weapons ban"+'</li>',
	trade: '<li>'+"Doesn’t support the Trans Pacific Partnership"+'</li>'+'<li>'+"Doesn’t support the North American Free Trade Agreement or the Central America Free Trade Agreement"+'</li>'+'<li>'+"Supports increasing tariffs on trade partners"+'</li>',
	abortion: '<li>'+"Doesn’t support keeping abortion legal except in the case of rape, incest, and life of the mother"+'</li>'+'<li>'+"Supports abortion if the life of the woman is at risk"+'</li>'+'<li>'+"Supports some restrictions on late-term abortions"+'</li>',
	economy: '<li>'+"Doesn’t support the minimum wage be raised"+'</li>'+'<li>'+"Unclear on raising taxes on the wealthiest Americans"+'</li>'+'<li>'+" He said no but plans to cut benefits to the wealthy"+'</li>',
	healthCare: '<li>'+"Thinks that Obamacare should be replaced" + '</li>' +'<li>'+"Doesn’t support an individual mandate"+'</li>'+'<li>'+"Doesn’t believe Medicaid should be expanded"+'</li>'
};
var rickScott = {
	name: "Rick Scott",
	office: "Senator",
	party: "Republican", 
	abortion: '<li>'+"Unclear if pro-choice or pro-life legislation"+'</li>'+'<li>'+ "Opposes federal abortion funding"+'</li>', 
	economy: '<li>'+"Doesn’t support federal spending as a means of promoting economic growth"+'</li>' + '<li>'+"Supports lowering corporate taxes as a means of promoting economic growth" + '</li>',
	natSecurity: '<li>'+"Unclear if American should support intervention in Middle Eastern conflicts beyond air support"+'</li>'+'<li>'+"Believes that America should secure its borders more"+'</li>',
	healthCare: '<li>'+"Supports repealing Obamacare"+'</li>'+'<li>'+"Believe Obamacare is a disaster and costs way too much"+'</li>',
	immigration: '<li>'+"Against illegal immigration"+'</li>'+'<li>'+"Believes Congress should secure the border and fix the immigration system"+'</li>'+'<li>'+"Immigration becomes much simpler once the border is secured and when there is an end to illegal immigration"+'</li>'
};
var joeKaufman = {
	name: "Joe Kaufman", 
	office: "House of Representatives", 
	party: "Republican", 
	economy: '<li>'+"“There is a problem. The national debt is quickly approaching $20 trillion.”"+'</li>'+'<li>'+"“Each year, we spend more than we take in and are forced to borrow from unfriendly nations or print more money which devalues our currency and severely impacts the middle-class.”"+'</li>',
	education: '<li>'+"“I do not think the federal government should dictate how states deal with the education of their residents. I want more power regarding education to go to the states. However, as Congressman, I will advocate for vocational training in our US schools, so that we can ready youth for the workforce. We do not want our kids graduating high school with no skills and then wind up sitting on their behinds collecting government welfare checks.”"+'</li>',
	energyEnviro: '<li>'+"Supports government funding for the development of renewable energy"+'</li>'+'<li>'+"Doesn’t support the federal regulation of greenhouse gas emissions"+'</li>'+'<li>'+"“While I support aggressively going after the fuels of today and I love the fact that we have become a major exporter of energy, as Congressman, I will advocate for equal investment and incentives to go towards renewables and the fuels of tomorrow. I am very excited about America's future!”"+'</li>',
	healthCare: '<li>'+"Supports the repealing of Obamacare"+'</li>',
	immigration: '<li>'+"Supports the construction of a wall along the Mexican border"+'</li>'
};
var hillaryClinton = {
	name: "Hillary Clinton",
	office: "President",
	party: "Democrat",
	trade: '<li>'+"Doesn’t support the Trans Pacific Partnership"+'<br>'+"Wants to renegotiate the North American Free Trade Agreement, does not support the Central American Free Trade Agreement"+'</li>'+'<li>'+"Supports the idea of “free trade”"+'</li>'+'<li>'+"Doesn’t support increasing tariffs on trade partners"+'</li>',
	abortion: '<li>'+"Supports keeping abortion legal"+'</li>'+'<li>'+"Supports abortion if the life of the woman is at risk"+'</li>'+'<li>'+"Supports abortion in the case of rape or incest"+'</li>'+'<li>'+"Supports some restrictions on late-term abortions"+'</li>',
	economy: '<li>'+"Wants the minimum wage to be raised"+'</li>'+'<li>'+"Thinks taxes should be raised on the wealthiest Americans"+'</li>',
	immigration: '<li>'+"Doesn’t want to deport all 11 million undocumented immigrants"+'</li>'+'<li>'+"Doesn’t want to build a wall along U.S.-Mexico border"+'</li>'+'<li>'+"Doesn’t believe Muslims should face extra immigration hurdles"+'</li>',
	healthCare:'<li>'+"Doesn’t think Obamacare should be replaced"+'</li>'+'<li>'+"Thinks there should be an individual mandate"+'</li>'+'<li>'+"Believes Medicaid should be expanded"+'</li>'
};
var billNelson = {
	name: "Bill Nelson",
	office: "Senator",
	party: "Democrat",
	abortion: '<li>'+"Pro-choice and a woman’s right to choose what she want"+'</li>',
	economy: '<li>'+"Doesn’t support federal spending as a means of promoting economic growth"+'</li>'+'<li>'+"Doesn’t support lowering corporate taxes as a means of promoting economic growth"+'</li>'+'<li>'+"Has worked to decrease the national debt by making sure the government doesn’t spend more than it should"+'</li>',
	immigration: '<li>'+"Unclear on his idea of supporting the construction of a wall along the Mexican border" + '</li>' + '<li>'+"Doesn’t support requiring immigrants who are unlawfully present to return to their country of origin before they are eligible for citizenship"+'</li>',
	natSecurity: '<li>'+"Supports the United States to use military force in order to prevent governments hostile to the U.S. from possessing a nuclear weapon"+'</li>'+'<li>'+"Supports increased American intervention in Middle Eastern conflicts beyond air support"+'</li>'
};
var debbieSchultz = {
	name: "Debbie Wasserman Schultz",
	office: "House of Representatives", 
	party: "Democrat", 
	economy: '<li>'+"Wants the economy to work for all Americans"+'</li>'+'<li>'+"Top priorities are creating jobs for the American people and an economy that’s built to last"+'</li>'+'<li>'+"Supports federal spending ads a means of promoting economic growth"+'</li>'+'<li>'+"Doesn’t support lowering corporate taxes as a means of promoting economic growth"+'</li>'+'<li>'+"“need a fair taxation system that supports a growing economy, small business creation, and American families”"+'</li>',
	education:'<li>'+"Wants to commit to our national education system by investing in public schools"+'</li>'+'<li>'+"Supports federal investments like Head Start"+'</li>'+'<li>'+"Believe teachers must be treated as the professionals they are"+'</li>',
	energyEnviro: '<li>' + "Supports government funding for the development of renewable energy"+'</li>'+ '<li>'+ "Supports the federal regulation of greenhouse gas emissions"+'</li>'+'<li>'+"Wants to take bold action on climate change and renewable energy and improve the quality of our air and water"+'</li>'+'<li>'+"Must protect South Florida’s Ecosystem"+'</li>',
	healthCare:'<li>'+"Doesn’t support repealing Obamacare"+'</li>'+'<li>'+"“I am proud that I was a part of the first time in American history we passed a comprehensive health care reform bill to ensure all Americans have access to quality, affordable health care while having the added benefit of significantly reducing long-term health care costs.”"+'</li>', 
	immigration: '<li>'+"Doesn’t support the construction of a wall along the Mexican border"+'</li>'+'<li>'+"Doesn’t support requiring immigrants who are unlawfully present to return to their country of origin before they are eligible for citizenship"+'</li>'+'<li>'+"“All immigrants deserve to be treated with dignity – in our communities and under the law.”"+'</li>'+'<li>'+"“There is significant harm to repair in our country when it comes to ensuring that immigrants are treated with dignity, and I am committed to addressing that harm while also proactively advancing immigration reforms that offer new solutions.”"+'</li>'+'<li>'+"“I will continue to fight for justice and equality for all immigrants in South Florida.”"+'</li>'
};
function immigration(){
	secondScreen();
	document.getElementById("issues").style.display ="inline";
	document.getElementById("pageInfo").innerHTML = "Issue: Immigration";
	document.getElementById("democrat").innerHTML = hillaryClinton.name + " (" + hillaryClinton.office +"):" + hillaryClinton.immigration +'<br>'
	+ billNelson.name + " (" + billNelson.office + "):" + '<br>' + billNelson.immigration + '<br>' + debbieSchultz.name + " (" + debbieSchultz.office + "):" + '<br>'
	+ debbieSchultz.immigration;
	document.getElementById("republican").innerHTML = donaldTrump.name + " (" + donaldTrump.office +"):" +'<br>'+ donaldTrump.immigration +'<br>'
	+ rickScott.name + " (" + rickScott.office + "):" + '<br>' + rickScott.immigration + '<br>' + joeKaufman.name + " (" + joeKaufman.office + "):" + '<br>'
	+ joeKaufman.immigration;
}




