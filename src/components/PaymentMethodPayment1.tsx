import { FunctionComponent, useState, useCallback } from "react";
import styles from "./PaymentMethodPayment1.module.css";
import PortalPopup from "../components/PortalPopup";
import Approvement from "../components/modal/Approvement";

import tokopedia from "../assets/tokopedia.svg";
import card from "../assets/card.svg";
import coin from "../assets/coin.svg";
import promo from "../assets/promo.svg";
import select from "../assets/select.svg";
import invest from "../assets/invest.svg";
import payicon from "../assets/payicon.svg";
import line from "../assets/line.svg";

import close from "../assets/close.svg";
type PaymentMethodPayment1Type = {
  setPaymentMethod: any;
  setPaymentApproved: any;
};

const PaymentMethodPayment1: FunctionComponent<PaymentMethodPayment1Type> = ({
  setPaymentMethod,
  setPaymentApproved,
}) => {
  return (
    <>
      <div className={styles.paymentMethodpayment1}>
        <div className={styles.title}>
          <div className={styles.iconpapercrossWrapper}>
            <img className={styles.iconpapercross} alt="" src={close} />
          </div>
          <div className={styles.title}>
            <div className={styles.groupWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.paymentPaperWrapper}>
                  <div className={styles.paymentPaper}>Payment Paper</div>
                </div>
                <b className={styles.pilihMetodePembayaran1}>
                  Pilih metode pembayaran
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.method}>
            <div className={styles.tokopedia}>
              <div className={styles.creditCardWrapper}>
                <b className={styles.tokopedia1}>Tokopedia</b>
              </div>
              <div className={styles.choose}>
                <input type="radio" className={styles.chooseChild} />
                <div className={styles.image138Wrapper}>
                  <img
                    className={styles.image138Icon1}
                    alt=""
                    src={tokopedia}
                  />
                </div>
                <div className={styles.kartuKredit}>Tokopedia</div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="363"
              height="2"
              viewBox="0 0 363 2"
              fill="none"
            >
              <path d="M0 1H363" stroke="#859CAB" stroke-width="0.3" />
            </svg>
            <div className={styles.creditCard}>
              <div className={styles.title2}>
                <div className={styles.creditCardWrapper}>
                  <b className={styles.tokopedia1}>Credit Card</b>
                </div>
              </div>
              <div className={styles.choose1}>
                <input type="radio" className={styles.chooseChild} />
                <div className={styles.chooseInner}>
                  <img className={styles.frameChild} alt="" src={card} />
                </div>
                <div className={styles.kartuKredit}>Kartu Kredit</div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="363"
              height="2"
              viewBox="0 0 363 2"
              fill="none"
            >
              <path d="M0 1H363" stroke="#859CAB" stroke-width="0.3" />
            </svg>
            <div className={styles.paperUsaha}>
              <div className={styles.title3}>
                <b className={styles.tokopedia1}>Paper Usaha</b>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.koinworks}>
                  <input type="radio" className={styles.check2} />
                  <img className={styles.image2Icon} alt="" src={coin} />
                  <div className={styles.kartuKredit}>KoinWorks</div>
                </div>
                <div className={styles.details}>
                  <div className={styles.ghost2} />
                  <div className={styles.jumlahPinjaman}>
                    <div className={styles.kartuKredit}>Limit</div>
                    <b className={styles.b}>Rp 10.000.000</b>
                  </div>
                  <div className={styles.fee}>
                    <div className={styles.kartuKredit}>Fee</div>
                    <b className={styles.b}>1.1%</b>
                  </div>
                  <div className={styles.fee}>
                    <div className={styles.kartuKredit}>Tenor</div>
                    <b className={styles.b}>30 Hari</b>
                  </div>
                </div>
              </div>
              <div className={styles.wrapper2}>
                <div className={styles.investree}>
                  <input type="radio" className={styles.check2} />
                  <div className={styles.image3Wrapper}>
                    <img className={styles.image3Icon} alt="" src={invest} />
                  </div>
                  <div className={styles.kartuKredit}>Investree</div>
                </div>
                <div className={styles.detailst}>
                  <div className={styles.ghost2} />
                  <div className={styles.jumlahPinjaman}>
                    <div className={styles.kartuKredit}>Limit</div>
                    <b className={styles.b}>Rp 8.000.000</b>
                  </div>
                  <div className={styles.fee}>
                    <div className={styles.kartuKredit}>Fee</div>
                    <b className={styles.b}>1.1%</b>
                  </div>
                  <div className={styles.fee}>
                    <div className={styles.kartuKredit}>Tenor</div>
                    <b className={styles.b}>30 Hari</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <div className={styles.content}>
              <div className={styles.promo}>
                <div className={styles.groupParent}>
                  <img className={styles.frameItem} alt="" src={promo} />
                  <select
                    className={styles.select}
                    id="fruitSelect"
                    name="fruit"
                  >
                    <option value="apple">Gunakan promo</option>
                    <option value="banana">Gunakan promo</option>
                    <option value="cherry">Gunakan promo</option>
                    <option value="grape">Gunakan promo</option>
                    <option value="orange">Gunakan promo</option>
                  </select>
                  {/* <div className={styles.paymentPaper}>{`Gunakan promo `}</div> */}
                </div>
                <img className={styles.path817Icon1} alt="" src={select} />
              </div>
              <div className={styles.price}>
                <b className={styles.paymentPaper}>Rincian Pembayaran</b>
                <div className={styles.total}>
                  <div className={styles.subtotal}>
                    <div className={styles.subtotal1}>Subtotal</div>
                    <div className={styles.rp5000000}>Rp 5.000.000</div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="263"
                    height="2"
                    viewBox="0 0 363 2"
                    fill="none"
                  >
                    <path d="M0 1H363" stroke="#859CAB" stroke-width="0.3" />
                  </svg>
                  <img className={styles.path10040Icon} alt="" src={line} />
                  <div className={styles.totalPembayaran}>
                    <b className={styles.totalPembayaran1}>Total Pembayaran</b>
                    <b className={styles.totalCount}>Rp 5.000.000</b>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.button}
              onClick={() => {
                setPaymentMethod(false);
                setPaymentApproved(true);
              }}
            >
              <img className={styles.frameIcon1} alt="" src={payicon} />
              <div className={styles.btnText1}>Bayar Sekarang</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodPayment1;
