import React from 'react'
import { useTranslation } from "react-i18next";
import '../../utils/i18n';
import CollapsibleSection from './Collapsible';
const Info = () => {
    const { t } = useTranslation();
    const popularCryptoList = t('POPULAR_CRYPTO_LIST', { returnObjects: true });
    const storageList = t('STORAGE_LIST', { returnObjects: true });
    const risksList = t('RISKS_LIST', { returnObjects: true });
    return (
        <div className="max-w-3xl w-full">
            <CollapsibleSection title={t('WHAT_IS_CRYPTO_HEADER')}>
                <p className="text-lg">{t('WHAT_IS_CRYPTO_CONTENT')}</p>
            </CollapsibleSection>

            <CollapsibleSection title={t('HOW_IT_WORKS_HEADER')}>
                <p className="text-lg">{t('HOW_IT_WORKS_CONTENT')}</p>
            </CollapsibleSection>

            <CollapsibleSection title={t('POPULAR_CRYPTO_HEADER')}>
                <ul className="list-disc pl-5">
                    {popularCryptoList.map((crypto, index) => (
                        <li key={index}>
                            <strong>{crypto.title}:</strong> {crypto.description}
                        </li>
                    ))}
                </ul>
            </CollapsibleSection>

            <CollapsibleSection title={t('BLOCKCHAIN_HEADER')}>
                <p className="text-lg">{t('BLOCKCHAIN_CONTENT')}</p>
            </CollapsibleSection>

            <CollapsibleSection title={t('STORAGE_HEADER')}>
                <p className="text-lg">{t('STORAGE_CONTENT')}</p>
                <ul className="list-disc pl-5 mt-2">
                    {storageList.map((storage, index) => (
                        <li key={index}>
                            <strong>{storage.title}:</strong> {storage.description}
                        </li>
                    ))}
                </ul>
            </CollapsibleSection>

            <CollapsibleSection title={t('BUY_CRYPTO_HEADER')}>
                <p className="text-lg">{t('BUY_CRYPTO_CONTENT')}</p>
            </CollapsibleSection>

            <CollapsibleSection title={t('RISKS_HEADER')}>
                <ul className="list-disc pl-5">
                    {risksList.map((risk, index) => (
                        <li key={index}>
                            <strong>{risk.title}:</strong> {risk.description}
                        </li>
                    ))}
                </ul>
            </CollapsibleSection>

            <CollapsibleSection title={t('CONCLUSION_HEADER')}>
                <p className="text-lg">{t('CONCLUSION_CONTENT')}</p>
            </CollapsibleSection>
        </div>
    )
}

export default Info
