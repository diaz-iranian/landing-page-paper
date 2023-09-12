import { FunctionComponent } from "react";
import styles from "./HowItWorks.module.css";

import file from "../assets/File.svg";
import button from "../assets/button.png";
import button_simpan from "../assets/button-simpan.png";
import banner from "../assets/banner-coin.png";
import label_check from "../assets/label_check.png";
import ttd from "../assets/ttd.png";
import btn_ttd from "../assets/Button_ttd.png";
import close from "../assets/close-icon.png";
import modal from "../assets/modal_limit.png";
import btn_transaksi from "../assets/Button_transaksi.png";

const HowItWorks: FunctionComponent = () => {
  return (
    <div className={styles.howItWorks1}>
      <b className={styles.prosesPendaftaranSmartcart} data-aos="zoom-out-down">
        Proses Pendaftaran SmartCart Pay Later
      </b>
      <div className={styles.grouping}>
        <div className={styles.steps} data-aos="fade-right">
          <div className={styles.stepsInner}>
            <div className={styles.parent}>
              <b className={styles.b}>1</b>
              <div className={styles.isiDataDiri1}>
                Isi data diri dan unggah dokumen legal Anda (SIUP, Akta
                Perusahaan, dll) pada halaman Pendaftaran.
              </div>
            </div>
          </div>
          <div className={styles.stepsChild}>
            <div className={styles.group}>
              <b className={styles.b}>2</b>
              <div className={styles.isiDataDiri1}>
                Dapatkan persetujuan penawaran dari berbagai macam lembaga
                keuangan penyedia pembayaran.
              </div>
            </div>
          </div>
          <div className={styles.stepsChild}>
            <div className={styles.parent1}>
              <b className={styles.b}>3</b>
              <div className={styles.isiDataDiri1}>
                Tanda tangan dokumen secara digital.
              </div>
            </div>
          </div>
          <div className={styles.stepsChild}>
            <div className={styles.group}>
              <b className={styles.b}>4</b>
              <div className={styles.isiDataDiri1}>
                Selesai! Anda dapat langsung melakukan transaksi dengan Paper
                Usaha.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pendaftaran}>
          <div className={styles.list}>
            <div className={styles.step1}>
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <div className={styles.dataDiriLengkapWrapper}>
                    <b className={styles.b}>Data Diri Lengkap</b>
                  </div>
                  <div className={styles.namaLengkapParent}>
                    <b className={styles.namaLengkap}>Nama Lengkap</b>
                    <div className={styles.dataDiriLengkapWrapper}>
                      <div className={styles.inputArea}>
                        <div className={styles.inputText}>
                          <div className={styles.priskaAprilia}>
                            Priska Aprilia
                          </div>
                        </div>
                        <img
                          className={styles.underlineIcon}
                          alt=""
                          src="Underline.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.namaLengkapParent}>
                    <b className={styles.namaLengkap}>Alamat Lengkap</b>
                    <div className={styles.dataDiriLengkapWrapper}>
                      <div className={styles.inputArea}>
                        <div className={styles.inputText}>
                          <div className={styles.priskaAprilia}>
                            Jl. Sunter Garden Raya No.5D, RT.6/RW.12
                          </div>
                        </div>
                        <img
                          className={styles.underlineIcon}
                          alt=""
                          src="Underline.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.frameItem} />
                    </div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.frameItem} />
                    </div>
                  </div>
                  <div className={styles.dataDiriLengkapWrapper}>
                    <b className={styles.b}>Unggah Dokumen Pribadi</b>
                  </div>
                  <div className={styles.contentInner}>
                    <div className={styles.frameGroup}>
                      <div className={styles.iconpaperfileWrapper}>
                        <img
                          className={styles.iconpaperfile}
                          alt=""
                          src={file}
                        />
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameChild} />
                        <div className={styles.frameChild2} />
                      </div>
                      <div className={styles.button}>
                        <div className={styles.buttonChild} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.buttonDaftar11} alt="" src={button} />
            </div>
            <div className={styles.step2}>
              <div className={styles.wrapper}>
                <div className={styles.content1}>
                  <div className={styles.pilihPenawaranUntukPinjamanWrapper}>
                    <b className={styles.b}>
                      Pilih Penawaran Untuk Pinjaman Anda!
                    </b>
                  </div>
                  <div className={styles.content2}>
                    <b className={styles.jumlahPinjaman}>Jumlah Pinjaman</b>
                    <b className={styles.rp5000000}>Rp 5.000.000</b>
                  </div>
                  <div className={styles.contentChild}>
                    <div className={styles.frameParent1}>
                      <div className={styles.checkBoxParent}>
                        {/* <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="Vector 1.svg"
                          />
                        </div> */}
                        <img
                          className={styles.image2Icon}
                          alt=""
                          src="image 2.png"
                        />
                      </div>
                      <div className={styles.ellipseParent}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.jumlahPinjamanParent}>
                          <div className={styles.fee}>Jumlah Pinjaman</div>
                          <b className={styles.rp300000000}>Rp 3.000.000,00</b>
                        </div>
                        <div className={styles.feeParent}>
                          <div className={styles.fee}>Fee</div>
                          <b className={styles.rp300000000}>1.1%</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contentInner1}>
                    <div className={styles.frameParent1}>
                      <div className={styles.checkBoxGroup}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxInner} />
                        </div>
                        <img
                          className={styles.image3Icon}
                          alt=""
                          src={label_check}
                        />
                      </div>
                      <div className={styles.ellipseGroup}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.jumlahPinjamanParent}>
                          <div className={styles.fee}>Jumlah Pinjaman</div>
                          <b className={styles.rp300000000}>Rp 2.000.000,00</b>
                        </div>
                        <div className={styles.feeParent}>
                          <div className={styles.fee}>Fee</div>
                          <b className={styles.rp300000000}>1.1%</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img className={styles.frame2234611} alt="" src={banner} />
                </div>
              </div>
              <img
                className={styles.buttonSimpan11}
                alt=""
                src={button_simpan}
              />
            </div>
            <div className={styles.step3}>
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <b className={styles.namaLengkap}>
                    Silahkan unggah tanda tangan Anda
                  </b>
                  <div className={styles.upload}>
                    <div className={styles.areaContainer1}>
                      <div className={styles.container2}>
                        <img className={styles.image1Icon} alt="" src={ttd} />
                        <div className={styles.paperButtonWrapper}>
                          <div className={styles.paperButton1}>
                            <div className={styles.container3}>
                              <b className={styles.b}>Ubah File</b>
                            </div>
                          </div>
                        </div>
                        <img className={styles.icon1} alt="" src={close} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.buttonTtd11} alt="" src={btn_ttd} />
            </div>
            <div className={styles.step1}>
              <div className={styles.wrapper}>
                <div className={styles.content4}>
                  <img
                    className={styles.modalLimitAktif11}
                    alt=""
                    src={modal}
                  />
                </div>
              </div>
              <img
                className={styles.buttonTransaksi11}
                alt=""
                src={btn_transaksi}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
