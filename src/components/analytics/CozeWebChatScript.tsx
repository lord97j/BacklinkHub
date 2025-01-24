"use client";

import Script from "next/script";

const coze_bot_id = process.env.NEXT_PUBLIC_COZE_BOT_ID!;
const coze_token = process.env.NEXT_PUBLIC_COZE_TOKEN!;

export function CozeWebChatScript() {
  return (
    <Script
      async
      src={`https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.1.0-beta.3/libs/oversea/index.js`}
      onLoad={() => {
        // @ts-ignore
        new CozeWebSDK.WebChatClient({
            config: {
              bot_id: coze_bot_id,
            },
            auth:  { 
                type: 'token',
                token: coze_token, 
                onRefreshToken: async () => '', 
              }, 
            componentProps: {
              title: 'Coze',
            },
            ui: { 
                /**
                * The ui.base parameter is used to add the overall UI effect of the chat window.
                * @param base.icon - Application icon URL.
                * @param base.layout - Layout style of the agent chat box window, which can be set as 'pc' or'mobile'.
                * @param base.lang - System language of the agent, which can be set as 'en' or 'zh-CN'.
                * @param base.zIndex - The z-index of the chat box.
                */
                base: { 
                  icon: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png', 
                  layout: 'pc', 
                  lang: 'en',
                  zIndex: 1000, 
                },
                /**
                * Control the UI and basic capabilities of the chat box.
                * @param chatBot.title - The title of the chatbox
                * @param chatBot.uploadable - Whether file uploading is supported.
                * @param chatBot.width - The width of the agent window on PC is measured in px, default is 460.
                * @param chatBot.el - Container for setting the placement of the chat box (Element).
                */
                chatBot: {
                  title: 'CursorRules Bot',
                  uploadable: true,
                  width: 390
                }, 
                /**
                * Controls whether to display the floating ball at the bottom right corner of the page.
                */
                asstBtn: { 
                  isNeed: true, 
                }, 
                /**
                * The ui.footer parameter is used to add the footer of the chat window.
                * @param footer.isShow - Whether to display the bottom copy module.
                * @param footer.expressionText - The text information displayed at the bottom.
                * @param footer.linkvars - The link copy and link address in the footer.
                */
                footer: { 
                  isShow: true, 
                  expressionText: 'Powered by CursorRules.org',
                } 
              },
          });
      }}
    />
  );
}
