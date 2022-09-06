import React, {useCallback} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import * as imagee from '../../public/image/index';
import CardButton from '../../part_component/cardButton';
import ButtonSetting from '../../part_component/buttonSetting';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
const BodySettings = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const onLanguage = useCallback(() => {
    navigation.navigate('Language');
  }, [navigation]);
  return (
    <View style={{marginTop: 20, alignItems: 'center', flex: 1}}>
      <View style={{marginTop: 20}}>
        <CardButton>
          <ButtonSetting
            image={imagee.SETTINGS.SAVED}
            text={t('savedMessages')}
          />
          <ButtonSetting image={imagee.SETTINGS.CALL} text={t('recentCalls')} />
          <ButtonSetting
            image={imagee.SETTINGS.SMARTPHONE}
            text={t('devices')}
          />
          <ButtonSetting
            image={imagee.SETTINGS.FOLDER}
            text={t('chatfolders')}
          />
        </CardButton>
      </View>
      <View style={{marginTop: 20}}>
        <CardButton>
          <ButtonSetting
            image={imagee.SETTINGS.NOTIFICATION}
            text={t('notification')}
          />
          <ButtonSetting image={imagee.SETTINGS.SIGN} text={t('privacy')} />
          <ButtonSetting
            image={imagee.SETTINGS.PRIVACY}
            text={t('dataandStorage')}
          />
          <ButtonSetting image={imagee.SETTINGS.DATA} text={t('appearance')} />
          <ButtonSetting
            onPress={onLanguage}
            image={imagee.SETTINGS.LANGUAGE}
            text={t('language')}></ButtonSetting>
          <ButtonSetting
            image={imagee.SETTINGS.APPEARANCE}
            text={t('stickers')}
          />
        </CardButton>
      </View>

      <View style={{marginTop: 20}}>
        <CardButton>
          <ButtonSetting
            image={imagee.SETTINGS.TELEGRAM_PREMIUM}
            text={t('telegramPremium')}
          />
        </CardButton>
      </View>

      <View style={{marginTop: 20}}>
        <CardButton>
          <ButtonSetting
            image={imagee.SETTINGS.ASK_QUESTION}
            text={t('askaQuestion')}
          />
          <ButtonSetting
            image={imagee.SETTINGS.TELEGRAM_FAQ}
            text={t('telegramFAQ')}
          />
          <ButtonSetting
            image={imagee.SETTINGS.TEGRAM_FEATURES}
            text={t('telegramFeatures')}></ButtonSetting>
        </CardButton>
      </View>
    </View>
  );
};
export default BodySettings;
