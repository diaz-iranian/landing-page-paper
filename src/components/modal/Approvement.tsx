import { FunctionComponent, useState, useCallback, useEffect } from "react";
import styles from "./Approvement.module.css";
import close from "../../assets/close.svg";

type PaymentMetApprovement = {
  onClose?: () => void;
};

const ModalsApprovementKoinworks: FunctionComponent<PaymentMetApprovement> = ({
  onClose,
}) => {
  return (
    <div className={styles.modalsapprovementkoinworks}>
      <div className={styles.iconpapercrossWrapper}>
        <img className={styles.iconpapercross} alt="" src={close} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.selamatPembayaranAndaBerhaParent}>
            <b className={styles.selamatPembayaranAnda1}>
              Selamat, Pembayaran Anda Berhasil!
            </b>
            <div className={styles.frameWrapper}>
              <div className={styles.pembayaranSudahDiterimaOlehWrapper}>
                <div className={styles.pembayaranSudahDiterimaContainer}>
                  <p
                    className={styles.keRekeningPenerima}
                  >{`Pembayaran sudah diterima oleh Paper.id dan dana akan diteruskan `}</p>
                  <p className={styles.keRekeningPenerima}>
                    ke rekening penerima dengan rincian sebagai berikut:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.nominalTransaksiParent}>
                <b className={styles.nominalTransaksi}>Nominal Transaksi</b>
                <b className={styles.rp500000000}>Rp 5,000,000.00</b>
              </div>
              <div className={styles.nominalTransaksiParent}>
                <div className={styles.adminFee}>Admin Fee</div>
                <div className={styles.rp209000}>Rp 2,090.00</div>
              </div>
              <div className={styles.nominalTransaksiParent}>
                <b className={styles.nominalTransaksi}>Total Bayar</b>
                <b className={styles.rp500000000}>Rp 5,002,090.00</b>
              </div>
              <div className={styles.nominalTransaksiParent}>
                <div className={styles.adminFee}>Tanggal Pembayaran</div>
                <div className={styles.rp209000}>12 Juni 2023 - 12:17:17</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.nominalTransaksiParent}>
                <div className={styles.adminFee}>Metode Pembayaran</div>
                <div className={styles.rp209000}>Paper Usaha - KoinWorks</div>
              </div>
              <div className={styles.nominalTransaksiParent}>
                <div className={styles.adminFee}>Sisa Limit</div>
                <b className={styles.rp5000000001}>Rp 5.000.000,00</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.button}>
            <div className={styles.adminFee}>Baik, Saya Mengerti</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalsApprovementKoinworks;
