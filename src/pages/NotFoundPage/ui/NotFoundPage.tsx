import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
    const { t } = useTranslation('notfound');
    return (
        <div>
            {t('Страница не найдена')}
        </div>
    );
};
