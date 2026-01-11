import { useEffect } from 'react';
import { VscClose, VscDesktopDownload } from 'react-icons/vsc';
import styles from '@/styles/ResumeModal.module.css';
import Resume from './Resume';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handlePrint = () => {
        window.open('/cv', '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <div className={styles.title}>Umar Hashmi - Resume</div>
                    <div className={styles.controls}>
                        <button className={`${styles.button} ${styles.printBtn}`} onClick={handlePrint}>
                            <VscDesktopDownload size={18} />
                            Download PDF
                        </button>
                        <button className={`${styles.button} ${styles.closeBtn}`} onClick={onClose}>
                            <VscClose size={18} />
                            Close
                        </button>
                    </div>
                </div>

                <div className={styles.resumeScrollArea}>
                    <Resume />
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
