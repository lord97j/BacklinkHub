"use client";

import Script from 'next/script'

const googleAdsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID!;

const CozeWebChatScript = () => {
  return (
    <>
      <Script
        src="https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.1.0-beta.3/libs/oversea/index.js"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            new CozeWebSDK.WebChatClient({
              config: {
                bot_id: '7463310106034831367',
              },
              componentProps: {
                title: 'Coze',
              },
            });
          `
        }}
      />
    </>
  )
}

export default CozeWebChatScript