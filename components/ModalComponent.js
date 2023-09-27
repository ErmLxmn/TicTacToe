// ModalComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useTranslation } from "react-i18next";

function ModalComponent({ isVisible, message, onPlayAgainPress, onHomePress }) {
  const {t} = useTranslation()

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMessage}>{message}</Text>
          <TouchableOpacity style={styles.okayButton} onPress={onPlayAgainPress}>
            <Text style={styles.okayButtonText}>{t("play_again")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.okayButton} onPress={onHomePress}>
            <Text style={styles.okayButtonText}>{t("home")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 60
  },
  modalMessage: {
    fontSize: 40,
    marginBottom: 30,
    textAlign: 'center',
  },
  okayButton: {
    backgroundColor: '#3f08a6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: 150,
    alignSelf: 'center'
  },
  okayButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalComponent;
