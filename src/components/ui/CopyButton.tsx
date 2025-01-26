'use client'

import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl';
import { useState } from 'react'

interface CopyButtonProps {
  content: string
}

export function CopyButton({ content }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const t = useTranslations('article');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    
    // 3秒后重置状态
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="absolute top-2 right-2"
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          <span className="ml-2">{t('copiedButton')}</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span className="ml-2">{t('copyButton')}</span>
        </>
      )}
    </Button>
  )
} 