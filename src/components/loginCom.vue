<!-- login的表单组件
可以与登录公用 -->

<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="top">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
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
</style>