import React from 'react'
import LogDate from './LogDate/LogDate'
import './LogItem.css';

const LogItem = () => {
  return (
    <div className="item">
        {/* 日期的容器 */}
        <LogDate />

        {/* 日志内容的容器 */}
        <div className="content">
            <h2 className="desc">学习React</h2>
            <div className="time">40分钟</div>
        </div>
    </div>
  )
}

export default LogItem
