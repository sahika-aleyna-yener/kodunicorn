import React from 'react';
import { CustomizationPanelProps } from './types';
import { colorOptions, maneStyles, accessories, outfits } from './options';
import {
  PanelContainer,
  Section,
  SectionTitle,
  ColorGrid,
  ColorOption,
  StyleGrid,
  StyleOption,
  ItemGrid,
  ItemCard,
  ItemImage,
  ItemName,
  LockOverlay,
  RequiredLevel
} from './styles';

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  currentCustomization,
  onCustomizationChange,
  unlockedItems
}) => {
  const handleColorChange = (part: keyof typeof colorOptions, colorId: string) => {
    const color = colorOptions[part].find(c => c.id === colorId);
    if (color) {
      onCustomizationChange({
        ...currentCustomization,
        colors: {
          ...currentCustomization.colors,
          [part]: color.value
        }
      });
    }
  };

  const handleManeStyleChange = (styleId: string) => {
    onCustomizationChange({
      ...currentCustomization,
      maneStyle: styleId as any
    });
  };

  const handleAccessoryToggle = (accessoryId: string) => {
    const newAccessories = currentCustomization.accessories.includes(accessoryId)
      ? currentCustomization.accessories.filter(id => id !== accessoryId)
      : [...currentCustomization.accessories, accessoryId];

    onCustomizationChange({
      ...currentCustomization,
      accessories: newAccessories
    });
  };

  const handleOutfitChange = (outfitId: string | null) => {
    onCustomizationChange({
      ...currentCustomization,
      outfit: outfitId
    });
  };

  return (
    <PanelContainer>
      <Section>
        <SectionTitle>Renkler</SectionTitle>
        {Object.entries(colorOptions).map(([part, colors]) => (
          <div key={part}>
            <h4>{part === 'body' ? 'Vücut' : part === 'mane' ? 'Yele' : part === 'horn' ? 'Boynuz' : 'Gözler'}</h4>
            <ColorGrid>
              {colors.map(color => (
                <ColorOption
                  key={color.id}
                  color={color.value}
                  isSelected={currentCustomization.colors[part as keyof typeof colorOptions] === color.value}
                  onClick={() => handleColorChange(part as keyof typeof colorOptions, color.id)}
                  title={color.name}
                />
              ))}
            </ColorGrid>
          </div>
        ))}
      </Section>

      <Section>
        <SectionTitle>Yele Stili</SectionTitle>
        <StyleGrid>
          {maneStyles.map(style => (
            <StyleOption
              key={style.id}
              isSelected={currentCustomization.maneStyle === style.id}
              onClick={() => handleManeStyleChange(style.id)}
            >
              {style.name}
            </StyleOption>
          ))}
        </StyleGrid>
      </Section>

      <Section>
        <SectionTitle>Aksesuarlar</SectionTitle>
        <ItemGrid>
          {accessories.map(accessory => {
            const isLocked = accessory.requiredLevel && !unlockedItems.includes(accessory.id);
            return (
              <ItemCard
                key={accessory.id}
                isLocked={isLocked}
                onClick={() => !isLocked && handleAccessoryToggle(accessory.id)}
              >
                <ItemImage src={accessory.image} alt={accessory.name} />
                <ItemName>{accessory.name}</ItemName>
                {isLocked && (
                  <LockOverlay>
                    <RequiredLevel>{accessory.requiredLevel}. Seviye</RequiredLevel>
                  </LockOverlay>
                )}
              </ItemCard>
            );
          })}
        </ItemGrid>
      </Section>

      <Section>
        <SectionTitle>Kıyafetler</SectionTitle>
        <ItemGrid>
          {outfits.map(outfit => {
            const isLocked = outfit.requiredLevel && !unlockedItems.includes(outfit.id);
            return (
              <ItemCard
                key={outfit.id}
                isLocked={isLocked}
                onClick={() => !isLocked && handleOutfitChange(outfit.id)}
              >
                <ItemImage src={outfit.image} alt={outfit.name} />
                <ItemName>{outfit.name}</ItemName>
                {outfit.sponsor && <span className="sponsor">{outfit.sponsor}</span>}
                {isLocked && (
                  <LockOverlay>
                    <RequiredLevel>{outfit.requiredLevel}. Seviye</RequiredLevel>
                  </LockOverlay>
                )}
              </ItemCard>
            );
          })}
        </ItemGrid>
      </Section>
    </PanelContainer>
  );
};