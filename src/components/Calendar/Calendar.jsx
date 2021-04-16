import React, { Component } from 'react';
import './calendar.css'
// import PubSub from 'pubsub-js'

class Calendar extends Component {

	componentDidMount() {
		let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		let month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		let month_name = ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];
		let holder = document.getElementById("days");
		let prev = document.getElementById("prev");
		let next = document.getElementById("next");
		let ctitle = document.getElementById("calendar-title");
		let cyear = document.getElementById("calendar-year");
		let my_date = new Date();
		let my_year = my_date.getFullYear();
		let my_month = my_date.getMonth();
		let my_day = my_date.getDate();



		// PubSub.publish('year',my_year)
		// PubSub.publish('month',my_month+1)
		// PubSub.publish('day',my_day)
		// 发布年月日信息
		const month =my_month+1
		const dateStr=my_year+'.'+month+'.'+my_day
		sessionStorage.setItem('dateStr',dateStr)


		//获取某年某月第一天是星期几
		function dayStart(month, year) {
			let tmpDate = new Date(year, month, 1);
			return (tmpDate.getDay());
		}
		//计算某年是不是闰年，通过求年份除以4的余数即可
		function daysMonth(month, year) {
			let tmp = year % 4;
			if (tmp === 0) {
				return (month_olympic[month]);
			} else {
				return (month_normal[month]);
			}
		}
		function refreshDate() {
			let str = "";
			let totalDay = daysMonth(my_month, my_year); //获取该月总天数
			let firstDay = dayStart(my_month, my_year); //获取该月第一天是星期几
			let myclass;
			for (let i = 1; i < firstDay; i++) {
				str += "<li></li>"; //为起始日之前的日期创建空白节点
			}
			for (let i = 1; i <= totalDay; i++) {
				if ((i < my_day && my_year === my_date.getFullYear() && my_month === my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year === my_date.getFullYear() && my_month < my_date.getMonth())) {
					myclass = " class='lightgrey'"; //当该日期在今天之前时，以浅灰色字体显示
				} else if (i === my_day && my_year === my_date.getFullYear() && my_month === my_date.getMonth()) {
					myclass = " class='green greenbox'"; //当天日期以绿色背景突出显示
				} else {
					myclass = " class='darkgrey'"; //当该日期在今天之后时，以深灰字体显示
				}
				str += "<li" + myclass + ">" + i + "</li>"; //创建日期节点
			}
			holder.innerHTML = str; //设置日期显示
			ctitle.innerHTML = month_name[my_month]; //设置英文月份显示
			cyear.innerHTML = my_year; //设置年份显示
		}
		refreshDate(); //执行该函数

		prev.onclick = function (e) {
			e.preventDefault();
			my_month--;
			if (my_month < 0) {
				my_year--;
				my_month = 11;
			}
			refreshDate();
		}
		next.onclick = function (e) {
			e.preventDefault();
			my_month++;
			if (my_month > 11) {
				my_year++;
				my_month = 0;
			}
			refreshDate();
		}
	}


	render() {
		return (
			<div>
				<div className="calendar">
					<div className="title">
						<h1 id="calendar-title">Month</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2 id="calendar-year">Year</h2>
						<div>
							<a href="{}" id="prev">→</a>
							<a href="{}" id="next">→</a>
						</div>

					</div>
					<div className="body">
						<div className="body-list">
							<ul>
								<li>MON</li>
								<li>TUE</li>
								<li>WED</li>
								<li>THU</li>
								<li>FRI</li>
								<li>SAT</li>
								<li>SUN</li>
							</ul>
						</div>
						<div className="darkgrey body-list">
							<ul id="days">
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Calendar;
