// components/ResourceList.tsx
import React from 'react'; // 确保导入 React
import { Link } from "@/lib/i18n";
import { ExternalLink, ArrowRightIcon } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge";

import { getDataList } from '@/lib/data';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

// type toolProps = {
//   name: string;
//   description: string;
//   url: string;
//   tags: string[]
// }

type categoryProps = {
  name: string,
  src: string,
  description: string,
  link: string
}

type categoryListProps = {
  categories: categoryProps[]
}


type toolsListProps = {
  category: categoryProps,
  locale: string,
  showMoreLink?: boolean
}

type toolProps = {
  name: string,
  description: string,
  url: string,
  icon_url?: string,
  tags?: string[]
  
}

const ToolCard = ({ resource }: { resource: toolProps }) => {
  const isCursorRules = resource.url.includes('.cursorrules');
  
  return (
    <Card className='group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800'>
      <CardHeader>
        <a 
          href={`${resource.url}?utm_source=${siteConfig.domain}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group-hover:text-blue-600 transition-colors flex items-center gap-2"
        >
          {!isCursorRules && (
            <div className='flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden'>
              {resource.icon_url ? (
                <Image 
                  width={24} 
                  height={24} 
                  src={resource.icon_url} 
                  alt={`${resource.name} favicon`} 
                  className="object-contain"
                  loading='lazy'
                />
              ) : (
                <img 
                  width={24} 
                  height={24} 
                  src={`https://favicon.im/${resource.url}?larger=true`} 
                  alt={`${resource.name} favicon`} 
                  className="object-contain"
                  loading='lazy'
                />
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className='text-lg font-semibold capitalize truncate group-hover:text-blue-600 transition-colors'>
              {resource.name}
            </CardTitle>
          </div>
          <ExternalLink size={16} className='flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity' />
        </a>
        <CardDescription className='mt-3 space-y-3'>
          <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-300'>
            {resource.description}
          </p>
          {resource.tags && resource.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {resource.tags.slice(0,3).map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className='px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

const ToolsList = ({ category, locale, showMoreLink = true }: toolsListProps) => {
  const t = useTranslations('toolsList');
  const srcList = getDataList(category.src, locale);

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight capitalize">{category.name}</h2>
        {showMoreLink && (
          <Link 
            href={`/category/${category.link}`} 
            className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            {t('more')} <span className='capitalize font-bold mx-1'>{category.name}</span> {t('tools')}
            <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {srcList.slice(0,8).map((resource: toolProps, i: number) => (
          <ToolCard key={i} resource={resource} />
        ))}
      </div>
    </section>
  );
};

const ToolsPage = ({ category, locale }: { category: categoryProps, locale: string }) => {
  const srcList = getDataList(category.src, locale);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* @ts-ignore */}
        {srcList.map((resource: toolProps, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={`${resource.url}?utm_source=${siteConfig.domain}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
               <div className='flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden'>
                {resource.icon_url ? (
                  <Image 
                    width={24} 
                    height={24} 
                    src={resource.icon_url} 
                    alt={`${resource.name} favicon`} 
                    className="object-contain"
                    loading='lazy'
                  />
                ) : (
                  <img 
                    width={24} 
                    height={24} 
                    src={`https://favicon.im/${resource.url}?larger=true`} 
                    alt={`${resource.name} favicon`} 
                    className="object-contain"
                    loading='lazy'
                  />
                )}
              </div>
                <CardTitle className='capitalize tracking-tighter'>{resource.name}</CardTitle>
                <ExternalLink size={16} className='ml-1' />
              </a>
              <CardDescription className='flex flex-col justify-between '>
                <div className='h-[60px] line-clamp-3 mt-1 tracking-tight text-start'>
                  {resource.description}
                </div>
                { resource.tags ? 
                  <div className='mt-3'>
                  {resource.tags.slice(0,3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className='text-xs pb-1 mr-1 mt-2 tracking-tighter'>{tag}</Badge>
                  ))}
                </div> :
                 null
                }     
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

type searchPageProps = {
  searchData: toolProps[]
}

const SearchPage = ({ searchData }: searchPageProps) => {

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* @ts-ignore */}
        {searchData.map((resource: toolProps, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={`${resource.url}?utm_source=${siteConfig.domain}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <div className='flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden'>
                {resource.icon_url ? (
                  <Image 
                    width={24} 
                    height={24} 
                    src={resource.icon_url} 
                    alt={`${resource.name} favicon`} 
                    className="object-contain"
                    loading='lazy'
                  />
                ) : (
                  <img 
                    width={24} 
                    height={24} 
                    src={`https://favicon.im/${resource.url}?larger=true`} 
                    alt={`${resource.name} favicon`} 
                    className="object-contain"
                    loading='lazy'
                  />
                )}
              </div>
                <CardTitle className='capitalize tracking-tighter'>{resource.name}</CardTitle>
                <ExternalLink size={16} className='ml-1' />
              </a>
              <CardDescription className='flex flex-col justify-between '>
                <div className='h-[60px] line-clamp-3 mt-1 tracking-tight text-start'>
                  {resource.description}
                </div>
                { resource.tags ? 
                  <div className='mt-3'>
                  {resource.tags.slice(0,3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className='text-xs pb-1 mr-1 mt-2 tracking-tighter'>{tag}</Badge>
                  ))}
                </div> :
                 null
                }     
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}


const CategoryList = ({ categories }: categoryListProps) => {

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* @ts-ignore */}
        {categories.map((category: categoryProps, index) => (
          <Card key={index} className='max-w-sm overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
              <a 
                href={`/category/${category.link}`}
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                <CardTitle className='capitalize'>{category.name}</CardTitle>
                <ArrowRightIcon size={16} className='ml-2'/>
              </a>
              <CardDescription className='flex flex-col justify-between'>
                <div className='h-[40px] line-clamp-2 mt-4 tracking-tight text-start'>
                {category.description}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export { ToolsList, ToolsPage, CategoryList, SearchPage };