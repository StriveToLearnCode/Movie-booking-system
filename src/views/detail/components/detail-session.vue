<template>
  <n-card class="detail-session">
    <div class="top">
      <div class="left">
        <n-image
          width="200"
          height="300"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </div>
      <div class="center">
        <div class="title">大话西游之大圣归来</div>
        <div class="en-title">
          The Great Sage of Journey to the West has returned
        </div>
        <div class="cate">
          <span>动作</span>
          <span>剧情</span>
          <span>爱情</span>
        </div>
        <div class="area">
          <span>中国大陆</span>
          <span>/105分钟</span>
        </div>
        <div class="time">
          <span>2022-12-12</span>
          <span>19:00中国大陆上映</span>
        </div>
        <div class="btn">
          <div class="btn-top">
            <n-button>想看</n-button>
            <n-button @click="toComment">评分</n-button>
          </div>
          <div class="btn-bottom">
            <n-button color="red">查看更多电影详情</n-button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rate">
          <div>评分</div>
          <n-rate readonly :default-value="4.5" />
        </div>
        <div class="ticket">
          <div>累计票房</div>
          <div><span>6783</span>万</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="date">
        <ul class="date-line">
          <li class="date-item">
            <div class="date-title">日期:</div>
            <ul class="date-list">
              <li class="active">今天12月11</li>
              <li>明天12月12</li>
              <li>后天12月13</li>
              <li>周六12月14</li>
              <li>周日12月15</li>
            </ul>
          </li>
        </ul>
        <ul class="date-line">
          <li class="date-item">
            <div class="date-title">品牌:</div>
            <ul class="date-list">
              <li class="active">全部</li>
              <li>万达影院</li>
              <li>大地影院</li>
              <li>金逸影城</li>
              <li>星光影城</li>
              <li>完美世界影城</li>
              <li>华谊兄弟</li>
              <li>其他</li>
            </ul>
          </li>
        </ul>
        <ul class="date-line">
          <li class="date-item">
            <div class="date-title">行政区:</div>
            <ul class="date-list">
              <li class="active">全部</li>
              <li>地铁附近</li>
              <li>思明区</li>
              <li>大田区</li>
              <li>杏林区</li>
              <li>集美区</li>
              <li>同安区</li>
              <li>龙华区</li>
              <li>翔安区</li>
              <li>丰泽区</li>
              <li>其他</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="cinema-list">
        <div class="title">
          <div class="line"></div>
          <span>影院列表</span>
        </div>
        <div class="list">
          <div class="item">
            <div class="left">
              <div class="name">万达影院</div>
              <div class="address">
                <span>地址:</span>
                思明区思明路万达广场
              </div>
            </div>
            <div class="right">
              <div class="info">
                <div class="price">¥30</div>
                <div class="btn">
                  <n-button @click="toSeat">选座购票</n-button>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="name">万达影院</div>
              <div class="address">
                <span>地址:</span>
                思明区思明路万达广场
              </div>
            </div>
            <div class="right">
              <div class="info">
                <div class="price">¥30</div>
                <div class="btn">
                  <n-button>选座购票</n-button>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="name">万达影院</div>
              <div class="address">
                <span>地址:</span>
                思明区思明路万达广场
              </div>
            </div>
            <div class="right">
              <div class="info">
                <div class="price">¥30</div>
                <div class="btn">
                  <n-button>选座购票</n-button>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="name">万达影院</div>
              <div class="address">
                <span>地址:</span>
                思明区思明路万达广场
              </div>
            </div>
            <div class="right">
              <div class="info">
                <div class="price">¥30</div>
                <div class="btn">
                  <n-button>选座购票</n-button>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="name">万达影院</div>
              <div class="address">
                <span>地址:</span>
                思明区思明路万达广场
              </div>
            </div>
            <div class="right">
              <div class="info">
                <div class="price">¥30</div>
                <div class="btn">
                  <n-button>选座购票</n-button>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="left">
              <div class="name">万达影院</div>
              <div class="address">
                <span>地址:</span>
                思明区思明路万达广场
              </div>
            </div>
            <div class="right">
              <div class="info">
                <div class="price">¥30</div>
                <div class="btn">
                  <n-button>选座购票</n-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </n-card>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="评分"
    positive-text="提交"
    class="custom-card"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  >
    <div class="content">
      <n-rate size="large" />
      <n-input
        v-model:value="value"
        type="textarea"
        placeholder="快来说说你的看法吧~"
      />
    </div>
  </n-modal>
</template>
<script setup>
import { NCard, NImage, NButton, NRate, NModal, NInput } from "naive-ui";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const showModal = ref(false);
const toSeat = () => {
  router.push("/detail/seat");
};
const toComment = () => {
  showModal.value = true;
};
const submitCallback = () => {
  showModal.value = false;
};
const cancelCallback = () => {
  showModal.value = false;
};
</script>
<style scoped lang="scss">
* {
  list-style: none;
}
.detail-session {
  .top {
    display: flex;
    .center {
      margin-left: 20px;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .cate {
        margin-top: 10px;
        span {
          margin-right: 5px;
        }
      }
      .area {
        margin-top: 10px;
      }
      .time {
        margin-top: 10px;
        span {
          margin-right: 5px;
        }
      }
      .btn {
        margin-top: 50px;
        width: 140px;
        .btn-top {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }
        .btn-bottom {
          margin-top: 10px;
        }
      }
    }
    .right {
      margin-left: 20px;
      margin-top: 190px;
      .ticket {
        div {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        span {
          font-size: 20px;
        }
      }
    }
  }
  .bottom {
    margin-top: 50px;
    .date {
      .date-line {
        border-bottom: 1px solid #f7f7f7;
        padding-bottom: 5px;
      }
      .date-item {
        display: flex;
        align-items: center;
      }
      .date-list {
        display: flex;
        gap: 10px;
        align-items: center;
        li {
          padding: 5px 10px;
          border-radius: 99999px;
          font-size: 12px;
        }
      }
    }
    .cinema-list {
      .title {
        display: flex;
        font-style: 25px;
        font-weight: bold;
        margin-bottom: 20px;

        .line {
          border-right: 4px solid #f03d37;
          margin-right: 5px;
        }
      }
      .list {
        .item {
          display: flex;
          justify-content: space-between;
          padding: 5px;
          margin-bottom: 20px;
          border-bottom: 1px dotted #e9e7e7;
          .address {
            margin-top: 5px;
            font-size: 12px;
          }
          .right {
            .info {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .price {
                font-size: 20px;
                color: #f03d37;
              }
              .btn {
                margin-left: 10px;
                .n-button {
                  border-radius: 99999px;
                }
              }
            }
          }
        }
      }
    }
  }
}
.active {
  background-color: #f34d41;
  color: #fff;
}
.custom-card {
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
}
</style>
