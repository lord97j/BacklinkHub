'use client';

import React, { useState } from 'react';
import { GlobeIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Command, CommandInput, CommandList, CommandGroup } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export function SitemapTool({ className }: { className?: string }) {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [sitemapUrl, setSitemapUrl] = useState('');
    const [error, setError] = useState('');
    const t = useTranslations('sitemap');

    const checkSitemap = async () => {
        setLoading(true);
        setError('');
        setSitemapUrl('');

        try {
            const response = await fetch(`/api/sitemap?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            
            if (data.error) {
                setError(data.error);
            } else {
                setSitemapUrl(data.sitemapUrl);
            }
        } catch (err) {
            setError(t('error_message'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Command className={cn("rounded-lg border shadow-md", className)}>
                <CommandInput 
                    placeholder={t('input_placeholder')} 
                    value={url} 
                    onValueChange={setUrl}
                />
                <CommandList>
                    <CommandGroup></CommandGroup>
                </CommandList>
            </Command>

            <Button 
                variant="outline" 
                className="mt-2" 
                onClick={checkSitemap}
                disabled={!url || loading}
            >
                {loading ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <GlobeIcon className="mr-2 h-4 w-4" />
                )}
                {t('check_button')}
            </Button>

            {error && (
                <Alert variant="destructive" className="w-full max-w-[640px]">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {sitemapUrl && (
                <Alert className="w-full max-w-[640px]">
                    <AlertDescription>
                        <a 
                            href={sitemapUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {sitemapUrl}
                        </a>
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
}
