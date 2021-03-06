import React from 'react';

interface IArrowLeftProps {
    className?: string;
}

export const ArrowLeft: React.FC<IArrowLeftProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="47.969"
            viewBox="0 0 28 47.969"
            className={className}
        >
            <defs>
                {/* <style style={{
                    fill: #fff;
                    fill-rule: evenodd;
                }}>
                    
                </style> */}
            </defs>
            <path
                id="interface_-_arrow_left"
                className="cls-1"
                style={{ fill: '#fff', fillRule: 'evenodd' }}
                d="M927.428,154.57a1.9,1.9,0,0,1,0,2.694l-24.159,22.16a1.9,1.9,0,0,1-2.694-2.694l24.158-22.16A1.91,1.91,0,0,1,927.428,154.57Zm-26.856,22a1.9,1.9,0,0,0,0,2.693l24.159,22.161a1.905,1.905,0,0,0,2.694-2.695L903.266,176.57A1.907,1.907,0,0,0,900.572,176.57Z"
                transform="translate(-900 -154.031)"
            />
        </svg>
    );
};
