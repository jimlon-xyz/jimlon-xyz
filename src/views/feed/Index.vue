<template>
    <Row :gutter="20">
        <Col flex="200px">
            <div class="ver-menu">
                <div class="active"><i class="fa-solid fa-clock"></i>最新</div>
                <div><i class="fa-solid fa-fire"></i>热门</div>
                <div><i class="fa-solid fa-calendar-star"></i>关注</div>
            </div>
        </Col>
        <Col flex="1">
            <div class="block">
                <div class="feed-editor--wrapper" :class="{'editor-active-focus': state.editorFocus}">
                    <div 
                        class="rich-editor" 
                        contenteditable="true" 
                        placeholder="快和吉友一起分享新鲜事！发布畅言时添加圈子和话题会被更多吉友看到哦～" 
                        @focus="state.editorFocus = true" 
                        @blur="state.editorFocus = false"></div>
                    <Row justify="space-between">
                        <div></div>
                        <div class="editor-count-label">0/1000</div>
                    </Row>
                </div>
                <Row justify="space-between" class="editor-toolbar">
                   <div class="tool">
                        <div class="tool-btn">
                            <i class="fa-regular fa-face-smile"></i>
                            <span>表情</span>
                        </div>
                        <div class="tool-btn">
                            <i class="fa-regular fa-image"></i>
                            <span>图片</span>
                        </div>
                        <div class="tool-btn">
                            <i class="fa-regular fa-link"></i>
                            <span>链接</span>
                        </div>
                        <div class="tool-btn">
                            <i class="fa-solid fa-hashtag"></i>
                            <span>话题</span>
                        </div>
                   </div>
                   <Button type="primary">发布</Button>
                </Row>
            </div>
        </Col>
        <Col flex="320px">
            <div class="block">
                <h3 class="title">
                    <span>热门话题</span>
                    <span class="btn"><i class="fa-sharp fa-solid fa-rotate-right"></i>换一换</span>
                </h3>
                <Divider />
                <div class="list">
                    <div class="list-item">
                        <div class="lt"><span class="tag hot">爆</span><router-link to="/">每日签到</router-link></div>
                        <div class="hot">5千</div>
                    </div>
                    <div class="list-item">
                        <div class="lt"><span class="tag error">热</span><router-link to="/">每日签到</router-link></div>
                        <div class="hot">5千</div>
                    </div>
                    <div class="list-item">
                        <div class="lt"><span class="tag warning">热</span><router-link to="/">每日签到</router-link></div>
                        <div class="hot">5千</div>
                    </div>
                    <div class="list-item">
                        <div class="lt"><span class="tag info">荐</span><router-link to="/">每日签到</router-link></div>
                        <div class="hot">5千</div>
                    </div>
                    <div class="list-item">
                        <div class="lt"><span class="tag">热</span><router-link to="/">每日签到</router-link></div>
                        <div class="hot">5千</div>
                    </div>
                    <div class="list-item">
                        <div class="lt"><span class="tag">热</span><router-link to="/">每日签到</router-link></div>
                        <div class="hot">5千</div>
                    </div>
                </div>
                <div class="mgn-20"><Divider /></div>
                <Row justify="center">
                    <span class="more-btn">查看更多<i class="fa-sharp fa-regular fa-angle-right"></i></span>
                </Row>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
    editorFocus: false
})
</script>

<style lang="less" scoped>
.ver-menu {
    background: #fff;
    border-radius: 3px;
    padding: 8px;
    > div {
        line-height: 38px;
        padding: 0 12px;
        border-radius: 4px;
        font-size: 15px;
        &:hover {
            i[class^="fa-"] {
                color: @primary-color;
            }
            color: @primary-color;
            background: fade(#aaa, 7%);
        }

        i[class^="fa-"] {
            margin-right: 10px;
            color: #8a919f;
            font-size: 15px;
        }
        &.active {
            i[class^="fa-"] {
                color: @primary-color;
            }
            color: @primary-color;
            background: fade(@primary-color, 7%);
        }
    }
}

.block {
    background: #fff;
    overflow: hidden;
    border-radius: 3px;

    .feed-editor--wrapper {
        margin: 20px 20px 0;
        background: #f2f3f5;
        border: solid 1px rgba(0,0,0,0);
        border-radius: 3px;
        .rich-editor {
            outline: 0;
            padding: 5px 12px;
            min-height: 80px;
        }
        .rich-editor:empty::before {
            content: attr(placeholder);
            color: #8a919f;
        }
        
        &.editor-active-focus {
            border: solid 1px @primary-color;
            background: #fff;
        }

        .editor-count-label {
            font-size: 12px;
            margin-right: 8px;
            margin-bottom: 4px;
            line-height: 20px;
            height: 20px;
            color: #8a919f;
        }
    }

    .editor-toolbar {
        margin: 19px 20px 27px;

        .tool {
            display: flex;
        
            .tool-btn {
                cursor: pointer;
                color: #4e5969;
                margin-right: 24px;

                i[class^="fa-"] {
                    margin-right: 4px;
                }
                
                &:hover {
                    color: @primary-color;
                }
            }
        }
    }


   h3.title {
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: @text-dark-color;
        display: flex;
        margin: 15px;
        justify-content: space-between;

        .btn {
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            i[class^="fa-"] {
                margin-right: 4px;
            }
            color: #8a919f;
        }
    }

    div.ivu-divider {
        margin: 10px 0;
    }

    div.list {
        margin: 0 20px 20px 20px;

        .list-item {
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;

            span.tag {
                font-size: 12px;
                background: @warning-color;
                color: #fff;
                line-height: 1;
                padding: 2px;
                border-radius: 2px;
                margin-right: 4px;
                &.wraning {
                    background: @warning-color;
                }
                &.error {
                    background: @error-color;
                }
                &.hot {
                    background: #cd2e06;
                }
                &.info {
                    background: linear-gradient(to top, @primary-color, #05abd4);
                }
            }

            > div.lt {
                display: flex;
                align-items: center;
                a {
                    color: @text-dark-color;
                    line-height: 1;
                }
            }

            div.hot {
                font-size: 14px;
                color: #8a919f;
                padding-left: 30px;
            }
        }
        
    }

    .mgn-20 {
        margin: 0 20px;
    }

    .more-btn {
        line-height: 28px;
        margin-bottom: 8px;
        color: #8a919f;
        i[class^="fa-"] {
            margin-left: 6px;
        }
        cursor: pointer;
    }

}
</style>