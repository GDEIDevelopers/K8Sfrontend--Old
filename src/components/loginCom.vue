<!-- login的表单组件

<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="top">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="primary" @click="toReg">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loginRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },

        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    // 登录逻辑，可以发送请求到后端进行验证
                    // 数据由v-model双向绑定
                    console.log('登录成功');
                    console.log(this.loginForm.username);
                    console.log(this.loginForm.password);
                    // 登录成功后跳转到首页
                    this.$router.push('/Home');
                } else {
                    console.log('表单验证失败');
                }
            });
        },
        toReg() {
            //跳转去注册
            this.$router.push('/Zhuce');
        }
    }
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style> -->

<template>
    <div class="login-page">
        <div class="center-container">
            <div class="left-section">
                <img src="../assets/loginOrReg/灯泡图案.png" alt="Image">
            </div>
            <div class="right-section">
                <div class="top-section">
                    <div class="form-container"> <!-- 新增的div -->
                        <form class="login-form">
                            <el-input placeholder="Username" style="margin-bottom: 20px;"></el-input>
                            <el-input type="password" placeholder="Password" style="margin-bottom: 20px;"></el-input>
                            <el-button type="primary" @click="login"
                                style="width: 200px; margin-bottom: 20px;">登录</el-button>
                        </form>
                    </div>
                </div>
                <div class="bottom-section">
                    第三方登录的API接口
                    <!-- 这里放置第三方登录的按钮或者其他元素 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    // 登录逻辑，可以发送请求到后端进行验证
                    // 数据由v-model双向绑定
                    console.log('登录成功');
                    console.log(this.loginForm.username);
                    console.log(this.loginForm.password);
                    // 登录成功后跳转到首页
                    this.$router.push('/Home');
                } else {
                    console.log('表单验证失败');
                }
            });
        },
        toReg() {
            //跳转去注册
            this.$router.push('/Zhuce');
        }
    }
    // 这里可以添加你自己的逻辑代码
}
</script>

<style scoped>
/* 在这里添加样式 */
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    /* 灰色背景 */
    /* 页面样式 */
}

.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* 边框光芒效果 */
    border-radius: 10px;
    /* 圆角边框 */
    padding: 20px;
    /* 内边距 */
    /* background-color: #a35d5d; */
    width: 600px;
    /* 宽度 */
    height: 350px;
    /* 高度 */
}

.left-section {
    /* 左侧部分样式 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-section img {
    max-width: 450px;
    max-height: 280px;
}

.right-section {
    /* 右侧部分样式 */
    display: flex;
    flex-direction: column;
    /* background-color: #a35d5d; */
}

.top-section {
    /* 上半部分样式 */
    flex: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #a35d5d; */
}

.bottom-section {
    /* 下半部分样式 */
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #a35d5d; */
}

.form-container {
    background-color: #ffffff;
    /* 登录表单的外层DIV的灰色背景 */
    padding: 20px;
    border-radius: 5px;
}

.login-form {
    /* 登录表单样式 */
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        /* 输入框样式 */
    }

    button {
        /* 按钮样式 */
    }
}
</style>
