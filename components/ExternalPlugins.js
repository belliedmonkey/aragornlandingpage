import { siteConfig } from '@/lib/config'
import dynamic from 'next/dynamic'
import { GlobalStyle } from './GlobalStyle'
import LA51 from './LA51'
import TianLiGPT from './TianliGPT'
import WebWhiz from './Webwhiz'

import { CUSTOM_EXTERNAL_CSS, CUSTOM_EXTERNAL_JS } from '@/blog.config'
import { isBrowser, loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'
import { initGoogleAdsense } from './GoogleAdsense'

const TwikooCommentCounter = dynamic(
  () => import('@/components/TwikooCommentCounter'),
  { ssr: false }
)
const DebugPanel = dynamic(() => import('@/components/DebugPanel'), {
  ssr: false
})
const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'), {
  ssr: false
})
const Fireworks = dynamic(() => import('@/components/Fireworks'), {
  ssr: false
})
const Nest = dynamic(() => import('@/components/Nest'), { ssr: false })
const FlutteringRibbon = dynamic(
  () => import('@/components/FlutteringRibbon'),
  { ssr: false }
)
const Ribbon = dynamic(() => import('@/components/Ribbon'), { ssr: false })
const Sakura = dynamic(() => import('@/components/Sakura'), { ssr: false })
const StarrySky = dynamic(() => import('@/components/StarrySky'), {
  ssr: false
})
const DifyChatbot = dynamic(() => import('@/components/DifyChatbot'), {
  ssr: false
})
const Analytics = dynamic(
  () =>
    import('@vercel/analytics/react').then(async m => {
      return m.Analytics
    }),
  { ssr: false }
)
const MusicPlayer = dynamic(() => import('@/components/Player'), { ssr: false })
const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })
const Busuanzi = dynamic(() => import('@/components/Busuanzi'), { ssr: false })
const Messenger = dynamic(() => import('@/components/FacebookMessenger'), {
  ssr: false
})
const VConsole = dynamic(() => import('@/components/VConsole'), { ssr: false })
const CustomContextMenu = dynamic(
  () => import('@/components/CustomContextMenu'),
  { ssr: false }
)
const DisableCopy = dynamic(() => import('@/components/DisableCopy'), {
  ssr: false
})
const AdBlockDetect = dynamic(() => import('@/components/AdBlockDetect'), {
  ssr: false
})
const LoadingProgress = dynamic(() => import('@/components/LoadingProgress'), {
  ssr: false
})
const AosAnimation = dynamic(() => import('@/components/AOSAnimation'), {
  ssr: false
})

/**
 * 各种插件脚本
 * @param {*} props
 * @returns
 */
const ExternalPlugin = props => {
  const DISABLE_PLUGIN = siteConfig('DISABLE_PLUGIN')
  const THEME_SWITCH = siteConfig('THEME_SWITCH')
  const DEBUG = siteConfig('DEBUG')
  const ANALYTICS_ACKEE_TRACKER = siteConfig('ANALYTICS_ACKEE_TRACKER')
  const ANALYTICS_VERCEL = siteConfig('ANALYTICS_VERCEL')
  const ANALYTICS_BUSUANZI_ENABLE = siteConfig('ANALYTICS_BUSUANZI_ENABLE')
  const ADSENSE_GOOGLE_ID = siteConfig('ADSENSE_GOOGLE_ID')
  const FACEBOOK_APP_ID = siteConfig('FACEBOOK_APP_ID')
  const FACEBOOK_PAGE_ID = siteConfig('FACEBOOK_PAGE_ID')
  const FIREWORKS = siteConfig('FIREWORKS')
  const SAKURA = siteConfig('SAKURA')
  const STARRY_SKY = siteConfig('STARRY_SKY')
  const MUSIC_PLAYER = siteConfig('MUSIC_PLAYER')
  const NEST = siteConfig('NEST')
  const FLUTTERINGRIBBON = siteConfig('FLUTTERINGRIBBON')
  const COMMENT_TWIKOO_COUNT_ENABLE = siteConfig('COMMENT_TWIKOO_COUNT_ENABLE')
  const RIBBON = siteConfig('RIBBON')
  const CUSTOM_RIGHT_CLICK_CONTEXT_MENU = siteConfig(
    'CUSTOM_RIGHT_CLICK_CONTEXT_MENU'
  )
  const CAN_COPY = siteConfig('CAN_COPY')
  const WEB_WHIZ_ENABLED = siteConfig('WEB_WHIZ_ENABLED')
  const AD_WWADS_BLOCK_DETECT = siteConfig('AD_WWADS_BLOCK_DETECT')
  const CHATBASE_ID = siteConfig('CHATBASE_ID')
  const COMMENT_DAO_VOICE_ID = siteConfig('COMMENT_DAO_VOICE_ID')
  const AD_WWADS_ID = siteConfig('AD_WWADS_ID')
  const COMMENT_TWIKOO_ENV_ID = siteConfig('COMMENT_TWIKOO_ENV_ID')
  const COMMENT_TWIKOO_CDN_URL = siteConfig('COMMENT_TWIKOO_CDN_URL')
  const COMMENT_ARTALK_SERVER = siteConfig('COMMENT_ARTALK_SERVER')
  const COMMENT_ARTALK_JS = siteConfig('COMMENT_ARTALK_JS')
  const COMMENT_TIDIO_ID = siteConfig('COMMENT_TIDIO_ID')
  const COMMENT_GITTER_ROOM = siteConfig('COMMENT_GITTER_ROOM')
  const ANALYTICS_BAIDU_ID = siteConfig('ANALYTICS_BAIDU_ID')
  const ANALYTICS_CNZZ_ID = siteConfig('ANALYTICS_CNZZ_ID')
  const ANALYTICS_GOOGLE_ID = siteConfig('ANALYTICS_GOOGLE_ID')
  const MATOMO_HOST_URL = siteConfig('MATOMO_HOST_URL')
  const MATOMO_SITE_ID = siteConfig('MATOMO_SITE_ID')
  const ANALYTICS_51LA_ID = siteConfig('ANALYTICS_51LA_ID')
  const ANALYTICS_51LA_CK = siteConfig('ANALYTICS_51LA_CK')
  const DIFY_CHATBOT_ENABLED = siteConfig('DIFY_CHATBOT_ENABLED')
  const TIANLI_KEY = siteConfig('TianliGPT_KEY')
  const GLOBAL_JS = siteConfig('GLOBAL_JS')
  const CLARITY_ID = siteConfig('CLARITY_ID')
  const IMG_SHADOW = siteConfig('IMG_SHADOW')
  const ANIMATE_CSS_URL = siteConfig('ANIMATE_CSS_URL')

  // 自定义样式css和js引入
  if (isBrowser) {
    // 初始化AOS动画
    // 静态导入本地自定义样式
    loadExternalResource('/css/custom.css', 'css')
    loadExternalResource('/js/custom.js', 'js')

    // 自动添加图片阴影
    if (IMG_SHADOW) {
      loadExternalResource('/css/img-shadow.css', 'css')
    }

    if (ANIMATE_CSS_URL) {
      loadExternalResource(ANIMATE_CSS_URL, 'css')
    }

    // 导入外部自定义脚本
    if (CUSTOM_EXTERNAL_JS && CUSTOM_EXTERNAL_JS.length > 0) {
      for (const url of CUSTOM_EXTERNAL_JS) {
        loadExternalResource(url, 'js')
      }
    }

    // 导入外部自定义样式
    if (CUSTOM_EXTERNAL_CSS && CUSTOM_EXTERNAL_CSS.length > 0) {
      for (const url of CUSTOM_EXTERNAL_CSS) {
        loadExternalResource(url, 'css')
      }
    }
  }

  useEffect(() => {
    if (ADSENSE_GOOGLE_ID) {
      setTimeout(() => {
        // 异步渲染谷歌广告
        initGoogleAdsense()
      }, 1000)
    }
  }, [])

  if (DISABLE_PLUGIN) {
    return null
  }

  return (
    <>
      {/* 全局样式嵌入 */}
      <GlobalStyle />

      {THEME_SWITCH && <ThemeSwitch />}
      {DEBUG && <DebugPanel />}
      {ANALYTICS_ACKEE_TRACKER && <Ackee />}
      {ANALYTICS_GOOGLE_ID && <Gtag />}
      {ANALYTICS_VERCEL && <Analytics />}
      {ANALYTICS_BUSUANZI_ENABLE && <Busuanzi />}
      {FACEBOOK_APP_ID && FACEBOOK_PAGE_ID && <Messenger />}
      {FIREWORKS && <Fireworks />}
      {SAKURA && <Sakura />}
      {STARRY_SKY && <StarrySky />}
      {MUSIC_PLAYER && <MusicPlayer />}
      {NEST && <Nest />}
      {FLUTTERINGRIBBON && <FlutteringRibbon />}
      {COMMENT_TWIKOO_COUNT_ENABLE && <TwikooCommentCounter {...props} />}
      {RIBBON && <Ribbon />}
      {DIFY_CHATBOT_ENABLED && <DifyChatbot />}
      {CUSTOM_RIGHT_CLICK_CONTEXT_MENU && <CustomContextMenu {...props} />}
      {!CAN_COPY && <DisableCopy />}
      {WEB_WHIZ_ENABLED && <WebWhiz />}
      {AD_WWADS_BLOCK_DETECT && <AdBlockDetect />}
      {TIANLI_KEY && <TianLiGPT />}
      <VConsole />
      <LoadingProgress />
      <AosAnimation />
      {ANALYTICS_51LA_ID && ANALYTICS_51LA_CK && <LA51 />}

      {ANALYTICS_51LA_ID && ANALYTICS_51LA_CK && (
        <>
          <script id='LA_COLLECT' src='//sdk.51.la/js-sdk-pro.min.js' defer />
          {/* <script async dangerouslySetInnerHTML={{
              __html: `
                    LA.init({id:"${ANALYTICS_51LA_ID}",ck:"${ANALYTICS_51LA_CK}",hashMode:true,autoTrack:true})
                    `
            }} /> */}
        </>
      )}

      {/* 注入JS脚本 */}
      {GLOBAL_JS && (
        <script
          async
          dangerouslySetInnerHTML={{
            __html: GLOBAL_JS
          }}
        />
      )}

      {CHATBASE_ID && (
        <>
          <script
            id={CHATBASE_ID}
            src='https://www.chatbase.co/embed.min.js'
            defer
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                    window.chatbaseConfig = {
                        chatbotId: "${CHATBASE_ID}",
                        }
                    `
            }}
          />
        </>
      )}

      {CLARITY_ID && (
        <>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
                `
            }}
          />
          
          </>
      
      )}
      {(
        <>
        <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                  !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="s6YpdGq290ZtwBlQI1U8tBaD4sueRkEl";;analytics.SNIPPET_VERSION="5.2.0";
                  analytics.load("s6YpdGq290ZtwBlQI1U8tBaD4sueRkEl");
                  analytics.page();
                  }}();
                `
            }}
          />
          <script src="https://cdn.amplitude.com/libs/analytics-browser-2.9.3-min.js.gz"></script>
          <script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.6.8-min.js.gz"></script>
          <script src="https://cdn.amplitude.com/libs/plugin-autocapture-browser-1.0.0-min.js.gz"></script>     
        <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1})).promise.then(function() {window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());window.amplitude.init('c7f849b23574b8657bc31e7bd66735eb');});
            `
            }}
          />     
        </>
        )}

      {COMMENT_DAO_VOICE_ID && (
        <>
          {/* DaoVoice 反馈 */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/daf1a94b.js","daovoice")
              `
            }}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
             daovoice('init', {
                app_id: "${COMMENT_DAO_VOICE_ID}"
              });
              daovoice('update');
              `
            }}
          />
        </>
      )}

      {AD_WWADS_ID && (
        <script
          type='text/javascript'
          src='https://cdn.wwads.cn/js/makemoney.js'
          async></script>
      )}

      {COMMENT_TWIKOO_ENV_ID && <script defer src={COMMENT_TWIKOO_CDN_URL} />}

      {COMMENT_ARTALK_SERVER && <script defer src={COMMENT_ARTALK_JS} />}

      {COMMENT_TIDIO_ID && (
        <script async src={`//code.tidio.co/${COMMENT_TIDIO_ID}.js`} />
      )}

      {/* gitter聊天室 */}
      {COMMENT_GITTER_ROOM && (
        <>
          <script
            src='https://sidecar.gitter.im/dist/sidecar.v1.js'
            async
            defer
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
            ((window.gitter = {}).chat = {}).options = {
              room: '${COMMENT_GITTER_ROOM}'
            };
            `
            }}
          />
        </>
      )}

      {/* 百度统计 */}
      {ANALYTICS_BAIDU_ID && (
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?${ANALYTICS_BAIDU_ID}";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `
          }}
        />
      )}

      {/* 站长统计 */}
      {ANALYTICS_CNZZ_ID && (
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
          document.write(unescape("%3Cspan style='display:none' id='cnzz_stat_icon_${ANALYTICS_CNZZ_ID}'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D${ANALYTICS_CNZZ_ID}' type='text/javascript'%3E%3C/script%3E"));
          `
          }}
        />
      )}

      {/* 谷歌统计 */}
      {ANALYTICS_GOOGLE_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_GOOGLE_ID}`}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ANALYTICS_GOOGLE_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        </>
      )}

      {/* Matomo 统计 */}
      {MATOMO_HOST_URL && MATOMO_SITE_ID && (
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="//${MATOMO_HOST_URL}/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '${MATOMO_SITE_ID}']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `
          }}
        />
      )}
    </>
  )
}

export default ExternalPlugin
