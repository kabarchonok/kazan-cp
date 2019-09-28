<template>
    <v-card class="auth">
        <v-tabs
                v-model="tab"
                centered>
            <v-tabs-slider/>

            <v-tab href="#signIn">
                Войти
            </v-tab>

            <v-tab href="#signUp">
                Зарегистрироваться
            </v-tab>


            <v-tabs-items class="pt-10" v-model="tab">
                <v-tab-item value="signIn">
                    <v-form ref="form">
                        <div class="auth__oauth">
                            <v-btn height="70" class="auth__button leader-id" :loading="LeaderIdLoading" @click="enter"> Войти через Leader ID</v-btn>
                            <div class="oauth__delimiter"></div>
                            <v-btn class="auth__button">
                                <div class="auth__button-wrapper"><i class="icon google"></i> Войти через Google
                                </div>
                            </v-btn>
                            <v-btn class="auth__button">
                                <div class="auth__button-wrapper"><i class="icon facebook"></i> Войти через
                                    Facebook
                                </div>
                            </v-btn>
                        </div>
                    </v-form>
                </v-tab-item>
                <v-tab-item value="signUp">
                    <v-form ref="form">
                        <div class="auth__oauth">
                            <v-btn height="70" class="auth__button leader-id"> Войти через Leader
                                ID
                            </v-btn>
                            <div class="oauth__delimiter"></div>
                            <v-btn class="auth__button">
                                <div class="auth__button-wrapper"><i class="icon google"></i> Войти
                                    через Google
                                </div>
                            </v-btn>
                            <v-btn class="auth__button">
                                <div class="auth__button-wrapper"><i class="icon facebook"></i>
                                    Войти через Facebook
                                </div>
                            </v-btn>
                        </div>
                    </v-form>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>


    </v-card>
</template>

<script>
    export default {
        name: "Auth",
        data() {
            return {
                tab: null,
                LeaderIdLoading: false,
            }
        },
        methods: {
            enter() {
                this.LeaderIdLoading = true

                setTimeout(() => {
                    this.$router.push('/quiz')
                }, 2000)
            }
        }
    }
</script>

<style scoped>
    .auth {
        max-width: 325px;
        margin: auto;
        padding: 1rem;
    }

    .auth__button {
        margin-bottom: 1rem;
    }

    .auth__button-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .auth__oauth {
        display: flex;
        flex-direction: column;
    }

    .oauth__delimiter {
        position: relative;
        text-align: center;
        margin-bottom: 1rem;
        height: 1.5rem;
    }

    .oauth__delimiter::before {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #9E9E9E;
    }

    .oauth__delimiter::after {
        color: #9E9E9E;
        position: absolute;
        left: 0;
        right: 0;
        top: -1px;
        bottom: 0;
        margin: auto;
        content: 'Или';
        width: 100px;
        background: #ffffff;
    }

    .icon {
        width: 30px;
        height: 30px;
        margin-right: 1.5rem;
    }

    .leader-id {
        font-weight: bold;
        color: #ffffff;
        background: linear-gradient(to bottom, #65dcd3, #8794cd);
    }

    .google {
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGZpbGw9IiM0MDgxRUQiIGQ9Ik0yNS4yNSAxNC40OWMwLS44MTQtLjA3My0xLjU5Ni0uMjA5LTIuMzQ4SDE0LjIzdjQuNDRoNi4xNzhhNS4yOCA1LjI4IDAgMCAxLTIuMjkxIDMuNDY2djIuODhoMy43MWMyLjE3LTEuOTk5IDMuNDIzLTQuOTQxIDMuNDIzLTguNDM4eiIvPiAgICAgICAgPHBhdGggZmlsbD0iIzMyQTM1MCIgZD0iTTE0LjIzIDI1LjcxYzMuMSAwIDUuNjk4LTEuMDI5IDcuNTk3LTIuNzgybC0zLjcxLTIuODhjLTEuMDI4LjY4OC0yLjM0MyAxLjA5NS0zLjg4NyAxLjA5NS0yLjk5IDAtNS41MjEtMi4wMTktNi40MjQtNC43MzJIMy45NzF2Mi45NzRhMTEuNDc1IDExLjQ3NSAwIDAgMCAxMC4yNTkgNi4zMjR6Ii8+ICAgICAgICA8cGF0aCBmaWxsPSIjRjRCNjA0IiBkPSJNNy44MDYgMTYuNDFhNi45IDYuOSAwIDAgMS0uMzYtMi4xOCA2LjkgNi45IDAgMCAxIC4zNi0yLjE4MlY5LjA3NEgzLjk3MUExMS40NzUgMTEuNDc1IDAgMCAwIDIuNzUgMTQuMjNjMCAxLjg1Mi40NDQgMy42MDUgMS4yMjEgNS4xNTVsMy44MzUtMi45NzR6Ii8+ICAgICAgICA8cGF0aCBmaWxsPSIjRTI0MTMzIiBkPSJNMTQuMjMgNy4zMTZjMS42ODUgMCAzLjE5OC41NzkgNC4zODggMS43MTZMMjEuOTEgNS43NGMtMS45ODgtMS44NTItNC41ODYtMi45OS03LjY4LTIuOTktNC40ODggMC04LjM3IDIuNTcyLTEwLjI1OSA2LjMyNGwzLjgzNSAyLjk3NGMuOTAzLTIuNzEzIDMuNDM0LTQuNzMyIDYuNDI0LTQuNzMyeiIvPiAgICA8L2c+PC9zdmc+");
    }

    .facebook {
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij4gICAgPHBhdGggZmlsbD0iIzM5NUE5OSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuOTU5IDI2VjEzLjQ5NGgzLjYwN2wuMzY4LTMuNDI3aC0zLjk3NVY2Ljk5OGMwLTEuMTEyLjcyMi0xLjY4IDEuNjQyLTEuNjhIMjBWMi4wMTRMMTYuNTA1IDJjLTMuNDAyIDAtNC45NDEgMi4wMDctNC45NDEgNC43Mzd2My4zMjZIOXYzLjQzaDIuNTY0VjI2aDQuMzk1eiIvPjwvc3ZnPg==");
    }
</style>