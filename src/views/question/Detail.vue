<template>
        <Row :gutter="20">
        <Col :span="17">
            <div class="section">
                <div class="question-header">
                    <div class="question-title"><Tag color="primary">置顶</Tag><h1>售后问题请通过官网渠道，演示站不作为售后渠道</h1></div>
                    <div class="question-meta">
                        <span>Jimlon</span>
                        <span><i class="fa-regular fa-calendar-days"></i>三天前</span>
                        <span><i class="fa-regular fa-folder-open"></i>其他</span>
                        <span><i class="fa-sharp fa-regular fa-eye"></i>1552</span>
                    </div>
                    <div class="question-body">如题，主题演示站仅作功能和效果的展示，主要由我们团队技术人员负责运维管理，所以不作为售前及售后服务渠道。
如对我们的产品、服务有任何问题欢迎通过我们的官网渠道提交服务单或者联系我们官网右侧的在线客服。</div>
                </div>
                <div class="question-reply">
                    <div class="question-as-title">
                        <div class="ltr">
                            <h3>回复</h3>
                            <Divider type="vertical" class="v-divider" />
                            <span class="reply-count">共56条回复</span>
                        </div>
                        <Button type="primary"><i class="fa-sharp fa-solid fa-feather-pointed"></i>我来回复</Button>
                    </div>
                    <div class="empty-holder">
                        <img :src="require('@/assets/empty-placeholder.png')"/>
                        <span>暂无回复内容</span>
                    </div>
                    <Divider />
                    <div class="editor-wrapper">
                        <Editor 
                            :locale="zhHans"
                            :value="state.form.value" 
                            :plugins="state.plugins"
                            @change="value => state.form.value = value"/>
                        <Row justify="space-between" align="middle">
                            <Checkbox v-model="state.form.follow">关注问题</Checkbox>
                            <Button type="primary">提交</Button>
                        </Row>
                    </div>
                </div>
            </div>
        </Col>
        <Col :span="7">
            <div class="block bg-none"><Button size="large" type="primary" long icon="md-create">我要提问</Button></div>
            <div class="block">
                <h3 class="title">热评帖子</h3>
            </div>
            <div class="block">
                <h3 class="title">随便看看</h3>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import { ref, reactive } from 'vue'

import zhHans from 'bytemd/lib/locales/zh_Hans'
import { Editor } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import 'bytemd/dist/index.css'

const state = reactive({
    plugins: [
        gfm(),
        gemoji()
    ],
    value: '',
    form: {
        follow: false,
        value: ''
    }
})
</script>

<style lang="less" scoped>
.section > div {
    background: #fff;
    margin-bottom: 20px;
}

.question-header {
    padding: 20px 20px 10px;
    
    > div {
        margin-bottom: 20px;
    }

    .question-title {
        line-height: 1;
        .ivu-tag {
            vertical-align: top;
        }
    }

    .question-meta {
        span {
            color: @text-color-third;
            margin-right: 10px;
            font-size: 13px;
            i {
                margin-right: 3px;
            }
        }
    }

    .question-body {
        white-space: pre-wrap;
        line-height: 1.65;
        font-size: 15px;
        color: @text-dark-color;
    }

    h1 {
        font-weight: 500;
        font-size: 24px;
        display: inline-block;
    }
}

.question-reply {
    
    .question-as-title {
        padding: 20px;
        border-bottom: solid 1px @border-color-third;
        display: flex;
        justify-content: space-between;

        h3 {
            font-size: 18px;
            font-weight: 600;
           
            display: inline-block;
        }

        .v-divider {
            margin: 0 20px;
            background-color: @text-color-third;
        }

        .reply-count {
            color: @text-color-third;
        }
    }


    .empty-holder {
        padding: 80px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #999;

        img {
            margin-bottom: 15px;
        }

    }

    .editor-wrapper {
        padding: 20px;

        > div {
            margin-bottom: 20px;
        }

    }

}

.block.bg-none {
    background: none;
    padding: 0;
}

.block {
    margin-bottom: 20px;
    background: #fff;
    padding: 15px;

    .title {
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: @text-dark-color;
        display: flex;
        margin-bottom: 15px;

        &::before {
            content: "";
            display: block;
            width: 3px;
            margin-right: 12px;
            background: @primary-color;
            border-radius: 3px;
        }
    }
}
</style>