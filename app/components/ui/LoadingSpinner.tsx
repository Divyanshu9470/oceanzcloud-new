import React from 'react';
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
    return (
        <div className={styles.loader}>
            <svg height="100%" viewBox="0 0 32 32" width="100%">
                <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    r="14"
                    strokeWidth="4"
                    style={{ stroke: 'rgb(29, 161, 242)', opacity: 0.2 }}
                ></circle>
                <circle
                    className={styles.dash}
                    cx="16"
                    cy="16"
                    fill="none"
                    r="14"
                    strokeWidth="4"
                    style={{
                        stroke: 'rgb(29, 161, 242)',
                        strokeDasharray: '80',
                        strokeDashoffset: '60',
                    }}
                ></circle>
            </svg>
        </div>
    );
}
