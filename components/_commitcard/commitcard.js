import React from 'react'
import { convertToRelativeTime }  from '../../lib/utils/formatdate';
import Link from 'next/link';

export const CommitCard = ({commit}) => {

    return (
        <div className={`flex flex-col w-full bg-neutral-200 hover:bg-neutral-300 border-[1px] rounded-lg border-gray-200 shadow-sm p-2 m-4 cursor-pointer `} >
                <div title={`Commit Message - ${commit.commit.message}`} className={`mt-2 text-sm font-medium text-gray-700`}>
                    {commit.commit.message}
                </div>

                <div className={`flex flex-ro items-center gap-3`}>
                    <div className={`flex flex-col`}>
                        <span className={`text-xs text-gray-500`}>
                            {commit.commit.author.name}
                        </span>
                    </div>

                    <div>
                        <span className={`text-gray-500 text-xs`}>
                            {convertToRelativeTime(commit.commit.author?.date)}
                        </span>
                    </div>
                </div>
                <div>
                <span className={`text-xs`}>
                    <Link title={`View Commit`} href={commit.url} className={`hover:scale-110 hover:text-blue-400`} >
                        {commit.sha}
                    </Link>
                </span>
            </div>            
        </div>
    )
}