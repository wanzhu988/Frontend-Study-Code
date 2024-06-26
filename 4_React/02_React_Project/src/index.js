//js的入口文件（webpack的编译入口）
import ReactDOM from 'react-dom/client';

const App = <div>
    <h1>
        This is a react project
    </h1>
    <p>
        I have my first react project
    </p>
</div>;

//获取根容器
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App);