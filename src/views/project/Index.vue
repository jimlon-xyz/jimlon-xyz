<template>
    <Row :gutter="20">
        <Col flex="1">
            <Space direction="vertical" :size="20">
                <div class="block">
                    <Row>
                        <Col flex="100px">项目类型</Col>
                        <Col class="radio-group">
                            <span class="active">全部</span>
                            <span>网站开发</span>
                            <span>APP开发</span>
                            <span>H5/小程序</span>
                            <span>区块链</span>
                            <span>游戏开发</span>
                            <span>UI设计</span>
                            <span>ERP开发</span>
                            <span>其他</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="100px">项目金额</Col>
                        <Col class="radio-group">
                            <span class="active">全部</span>
                            <span>0-5千</span>
                            <span>5千-5万</span>
                            <span>5万-10万</span>
                            <span>10万-50万</span>
                            <span>50万以上</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="100px">项目状态</Col>
                        <Col class="radio-group">
                            <span class="active">全部</span>
                            <span>竞标中</span>
                            <span>进行中</span>
                            <span>已完成</span>
                        </Col>
                    </Row>
                </div>
                <div class="grid">
                    <div class="grid-item" v-for="k of 10" :key="k">
                        <div class="grid-card-title">小程序设计</div>
                        <div class="grid-card-label">微信小程序</div>
                        <div class="grid-card-price">￥6,600</div>
                        <div class="grid-card-desc">小程序具备客户裂变功能， 具有微信和第三方支付， 分销功能。</div>
                        <div class="grid-card-date">11111</div>
                        <Row :gutter="20">
                            <Col flex="1"><Tag color="volcano">进行中</Tag></Col>
                            <Col><Button type="primary" ghost size="small">参与需求</Button></Col>
                        </Row>
                    </div>
                </div>
            </Space>
        </Col>
        <Col flex="320px">
            <div class="aside">
                asdfasdfsadf
            </div>
        </Col>
    </Row>
</template>

<script setup></script>

<style lang="less" scoped>
.block {
    background: #fff;
    padding: 20px;

    > div {
        margin-bottom: 20px;
        > span {
            width: 100px;
            display: inline-block;
        }
        &:last-child {
            margin-bottom: 0;
        }

        .radio-group {

            > span {
                cursor: pointer;
                margin-right: 10px;
                padding: 0 8px;
                line-height: 24px;
                display: inline-block;
                font-size: 14px;
                border-radius: 3px;
                color: @text-color-secondary;

                &.active {
                    background: @primary-color;
                    color: #fff;
                }
            }
        }
    }
}

.ivu-row .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    .grid-item {
        background: #fff;
        padding: 22px 15px 25px;
        border-right: solid 1px #efefef;
        border-bottom: solid 1px #efefef;

        &:nth-of-type(3n) {
            border-right: 0;
        }
        &:hover {
            box-shadow: 0 4px 25px 0 rgb(210 210 210 / 30%);
            z-index: 1;
            position: relative;
        }

        .grid-card-title {
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: 600;
        }

        .grid-card-label {
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
        }

        .grid-card-price {
            color: @error-color;
            font-size: 16px;
            margin-bottom: 15px;
        }

        .grid-card-desc {
            margin-bottom: 10px;
        }

        .grid-card-date {
            padding: 5px 8px;
            background: #f5f5f5;
            margin-bottom: 15px;
        }
    }
}

.aside {
    background: #fff;
}
</style>