<template>
    <Space direction="vertical" type="flex" :size="20">
        <div class="question-header--wrapper">
            <section>
                <Row :gutter="20">
                    <Col flex="1">
                        <div class="tags-list">
                            <router-link to="/tag/USDT" class="jm-tag">USDT</router-link>
                            <router-link to="/tag/bep-20" class="jm-tag">BEP-20</router-link>
                        </div>
                        <div class="title-area">
                            <div class="topic-reward">
                                <img :src="require('@/assets/coins.png')" height="20"/>
                                <span>{{Math.floor(Math.random() * 50)}}</span>
                            </div>
                            <h1>这是标题</h1>
                        </div>
                        <div class="body">我这个是一串问题描述</div>
                        <div class="date">发布于 2022-09-21 21:58:09</div>
                        <div class="bottom-area">
                            <Space :size="20">
                                <Space :size="8">
                                    <Button type="primary">关注问题</Button>
                                    <Button type="primary" ghost><i class="fa-solid fa-pen"></i>我来回答</Button>
                                </Space>
                                <Space :size="20">
                                    <span class="btn"><i class="fa-solid fa-share-from-square"></i>分享</span>
                                    <span class="btn"><i class="fa-regular fa-bookmark"></i>收藏</span>
                                    <span class="btn"><i class="fa-solid fa-triangle-exclamation"></i>举报</span>
                                </Space>
                            </Space>
                        </div>
                    </Col>
                    <Col flex="320px">
                        <Row class="header-meta">
                            <Col>
                                <div class="label">关注者</div>
                                <div class="value">35</div>
                            </Col>
                            <Col><div class="divider-vertical"></div></Col>
                            <Col>
                                <div class="label">被浏览</div>
                                <div class="value">143,587</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </div>
        <section>
            <Row :gutter="20">
                <Col flex="1">
                    <div class="section">
                        <div class="question-reply">
                            <div class="question-as-title">
                                <div class="ltr">
                                    <h3>回复</h3>
                                    <Divider type="vertical" class="v-divider" />
                                    <span class="reply-count">共56条回复</span>
                                </div>
                                <span class="btn sort-btn">默认排序<i class="fa-sharp fa-solid fa-chevron-down"></i></span>
                            </div>
                            <div class="empty-holder">
                                <img src="@/assets/empty-placeholder.png"/>
                                <span>暂无回复内容</span>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="question-reply">
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
                <Col flex="320px">
                    <Space :size="20" align="stretch" direction="vertical" type="flex">
                        <AboutAuthorAside :authorId="1"/>      
                        <SimilarQuestionAside/>
                    </Space>
                </Col>
            </Row>
        </section>
    </Space>
</template>

<script setup>
import { ref, reactive } from 'vue'

import zhHans from 'bytemd/lib/locales/zh_Hans'
import { Editor } from '@bytemd/vue-next'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import 'bytemd/dist/index.css'

import AboutAuthorAside from "@/components/AboutAuthorAside"
import SimilarQuestionAside from "@/components/SimilarQuestionAside"

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
//写一个白色样式
.question-header--wrapper {
    background: #fff;
    padding: 20px 0;


    .tags-list {
        margin-bottom: 20px;

        .jm-tag {
            color: @primary-color !important;
            background: fade(@primary-color, 12%);
            font-size: 14px;
            padding: 5px 8px;
            transition: none !important;
            margin-right: 8px;
            line-height: 1;

            &:hover {
                color: #fff !important;
                background: fade(@primary-color, 85%);
            }
        }

    }

    .title-area {
        display: flex;
        line-height: 1;
        align-items: flex-start;
        margin: 0 0 15px;

        .topic-reward {
            display: inline-flex;
            color: @warning-color;
            margin-right: 8px;
            font-size: 18px;
            align-items: center;

            > img {
                margin-right: 3px;
            }
        }

        h1 {
            font-size: 22px;
            font-weight: 600;
            display: block;
        }

    }

    

    .body {
        font-size: 15px;
        line-height: 25px;
    }

    .date {
        margin-top: 10px;
        color: #777;
        font-size: 14px;
    }

    .bottom-area {
        margin-top: 20px;

        span.btn {
            color: #8590a6;
            font-size: 13px;
            
            i[class^="fa-"] {
                margin-right: 4px;
            }

            &.active {
                color: @primary-color;
            }
        }
    }

    .header-meta {

        .label {
            color: #8590a6;
            font-size: 14px;
            text-align: center;
        }

        .value {
            font-size: 20px;
            font-weight: 600;
            text-align: center;
        }

        .divider-vertical {
            width: 1px;
            margin: 0 20px;
            height: 100%;
            background: #ebebeb;
        }
    }

}

.ivu-space .ivu-space-item section {
    width: 1200px;
    margin: 0 auto;
}

.section > div {
    background: #fff;
    margin-bottom: 20px;
}

/* .question-header {
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
            margin-right: 20px;
            font-size: 13px;
            i {
                margin-right: 3px;
            }
        }

        :deep(.ivu-poptip-body) {
            padding: 0;
        }
        
        :deep(.ivu-poptip-inner) {
            box-shadow: 2px 6px 27px 0 rgb(38 38 38 / 20%);
            overflow: hidden;
        }

        :deep(.ivu-poptip-arrow) {
            display: none;
        }

        .user-card {
            width: 360px;
            padding-top: 120px;
            background: var(--bgCover) left top no-repeat;
            background-size: 100% 120px;

            :deep(.ivu-divider) {
                background: rgba(0,0,0,0.05);
                margin: 20px 0;
            }

            img {
                display: block;
            }

            .split-divide {
                margin: 0 12px;
            }

            .card-cover {
                width: 100%;
                height: 120px;
                object-fit: fill;
            }

            .user-avatar {
                position: relative;
                border-radius: 50%;
                width: 80px;
                height: 80px;
                margin: -42px auto 0 auto;
                border: solid 2px #fff;
                box-sizing: border-box;
            }

            .user-name {
                display: flex;
                justify-content: center;
                margin: 8px 0 8px;
                align-items: center;

                a.name {
                    font-size: 16px;
                    font-weight: 600;
                    color: @text-dark-color;
                    margin-right: 8px;
                }

            }

            .user-stats {
                margin: 20px 15px;

                span.value {
                    color: @text-color !important;
                    display: block;
                    text-align: center;
                    font-size: 18px;
                    font-weight: 400;
                }

                span.label {
                    color: #8590a6 !important;
                    display: block;
                    text-align: center;
                    font-size: 13px;
                }
            }

            .user-action {
                margin-bottom: 20px;

                :deep(button) {
                    margin-right: 8px;
                }

                :deep(button + button) {
                    margin-left: 8px;
                    margin-right: 0;
                }
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
} */

.question-reply {
    
    .question-as-title {
        padding: 20px;
        border-bottom: solid 1px @border-color-third;
        display: flex;
        justify-content: space-between;


        .sort-btn {
            color: #555;

            i[class^="fa-"] {
                margin-left: 4px;
            }
        }

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

</style>