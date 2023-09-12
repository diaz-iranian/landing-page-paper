import { FunctionComponent } from "react";
import styles from "./Pendaftaran01.module.css";

import uar from "../../assets/uar.svg"

import ktp from "../../assets/ktp.png"
import document from "../../assets/document.png"
import calendar from "../../assets/calendar.svg"
import lines from "../../assets/Lines.svg"

const Simulator: FunctionComponent = () => {
  return (
    <div className={styles.simulator}>
      <div className={styles.wrapper}>
        <div className={styles.heroTitle}>
          <div className={styles.simulasikanPembayaranLebihCParent}>
            <div className={styles.simulasikanPembayaranLebih1}>
              Simulasikan Pembayaran Lebih Cepat dengan
            </div>
            <b className={styles.apiEmbededFinancingContainer}>
              <p className={styles.apiEmbeded}>{`API Embeded `}</p>
              <p className={styles.apiEmbeded}>Financing Paper!</p>
            </b>
          </div>
        </div>
      </div>
      <div className={styles.registrationForm}>
        <div className={styles.wrapper1}>
          <div className={styles.content}>
            <div className={styles.stepper}>
              <div className={styles.wrapper2}>
                <div className={styles.content1}>
                  <div className={styles.step1}>
                    <div className={styles.point}>
                      <div className={styles.pointChild} />
                      <b className={styles.b}>1</b>
                    </div>
                    <b className={styles.informasiSupplier}>Isi Form</b>
                  </div>
                  <img className={styles.lineIcon2} alt="" src={lines} />
                  <div className={styles.step3}>
                    <div className={styles.point}>
                      <div className={styles.pointItem} />
                      <b className={styles.b}>2</b>
                    </div>
                    <b className={styles.informasiSupplier1}>Pilih Penawaran</b>
                  </div>
                  <img className={styles.lineIcon2} alt="" src={lines} />
                  <div className={styles.step3}>
                    <div className={styles.point}>
                      <div className={styles.pointItem} />
                      <b className={styles.b}>3</b>
                    </div>
                    <b className={styles.informasiSupplier1}>
                      <p className={styles.apiEmbeded}>Tanda Tangan</p>
                      <p className={styles.apiEmbeded}>Dokumen</p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.dataDiriLengkapWrapper}>
              <b className={styles.dataDiriLengkap1}>Data Diri Lengkap</b>
            </div>
            <div className={styles.namaLengkapParent}>
              <b className={styles.namaLengkap}>Nama Lengkap</b>
              <div className={styles.text3}>
                <div className={styles.inputArea}>
                  <div className={styles.inputText}>
                    <div className={styles.pilihTanggal}>
                      cth. Priska Aprilia
                    </div>
                  </div>
                  <hr style={{width:"100%"}}/>
                  {/* <img
                    className={styles.underlineIcon}
                    alt=""
                    src="Underline.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className={styles.alamatLengkapParent}>
              <b className={styles.namaLengkap}>Alamat Lengkap</b>
              <div className={styles.text3}>
                <div className={styles.inputArea}>
                  <div className={styles.inputText}>
                    <div className={styles.pilihTanggal}>
                      cth. Jl. Sunter Garden Raya No.5D, RT.6/RW.12
                    </div>
                  </div>
                  <hr style={{width:"100%"}}/>
                  {/* <img
                    className={styles.underlineIcon}
                    alt=""
                    src="Underline.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.tanggalLahirParent}>
                <b className={styles.namaLengkap}>Tanggal Lahir</b>
                <div className={styles.text3}>
                  <div className={styles.inputArea}>
                    <div className={styles.inputText2}>
                      <div className={styles.pilihTanggal}>Pilih Tanggal</div>
                      <img
                        className={styles.iconpaperfile}
                        alt=""
                        src={calendar}
                      />
                    </div>
                    <hr style={{width:"100%"}}/>
                    {/* <img
                      className={styles.underlineIcon}
                      alt=""
                      src="Underline.svg"
                    /> */}
                  </div>
                </div>
              </div>
              <div className={styles.tanggalLahirParent}>
                <b className={styles.namaLengkap}>No. Telp</b>
                <div className={styles.text3}>
                  <div className={styles.inputArea}>
                    <div className={styles.inputText}>
                      <div className={styles.pilihTanggal}>
                        cth. 08123456789
                      </div>
                    </div>
                    <hr style={{width:"100%"}}/>
                    {/* <img
                      className={styles.underlineIcon}
                      alt=""
                      src="Underline.svg"
                    /> */}
                  </div>
                </div>
              </div>
              <div className={styles.tanggalLahirParent}>
                <b className={styles.namaLengkap}>No. Telp Perusahaan</b>
                <div className={styles.text3}>
                  <div className={styles.inputArea}>
                    <div className={styles.inputText}>
                      <div className={styles.pilihTanggal}>cth. 021998997</div>
                    </div>
                    <hr style={{width:"100%"}}/>
                    {/* <img
                      className={styles.underlineIcon}
                      alt=""
                      src="Underline.svg"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.noKtpParent}>
                <b className={styles.namaLengkap}>No. KTP</b>
                <div className={styles.text3}>
                  <div className={styles.inputArea}>
                    <div className={styles.inputText}>
                      <div className={styles.pilihTanggal}>
                        cth. 327123456789
                      </div>
                    </div>
                    <hr style={{width:"100%"}}/>
                    {/* <img
                      className={styles.underlineIcon}
                      alt=""
                      src="Underline.svg"
                    /> */}
                  </div>
                </div>
              </div>
              <div className={styles.tanggalLahirParent}>
                <b className={styles.namaLengkap}>No. NPWP</b>
                <div className={styles.text3}>
                  <div className={styles.inputArea}>
                    <div className={styles.inputText}>
                      <div className={styles.pilihTanggal}>
                        cth. 990998997996
                      </div>
                    </div>
                    <hr style={{width:"100%"}}/>
                    {/* <img
                      className={styles.underlineIcon}
                      alt=""
                      src="Underline.svg"
                    /> */}
                  </div>
                </div>
              </div>
              <div className={styles.noKtpParent}>
                <b className={styles.namaLengkap}>Jumlah Pinjaman</b>
                <div className={styles.text10}>
                  <div className={styles.inputArea}>
                    <div className={styles.inputText}>
                      <div className={styles.pilihTanggal}>
                        <span>{`Rp `}</span>
                        <span className={styles.span}>0</span>
                      </div>
                    </div>
                    <hr style={{width:"100%"}}/>
                    {/* <img
                      className={styles.underlineIcon}
                      alt=""
                      src="Underline.svg"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.namaPerusahaanParent}>
              <b className={styles.namaLengkap}>Nama Perusahaan</b>
              <div className={styles.text3}>
                <div className={styles.inputArea}>
                  <div className={styles.inputText}>
                    <div className={styles.pilihTanggal}>
                      cth. PT Pembangunan Sejahtera
                    </div>
                  </div>
                  <hr style={{width:"100%"}}/>
                  {/* <img
                    className={styles.underlineIcon}
                    alt=""
                    src="Underline.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className={styles.alamatPerusahaanParent}>
              <b className={styles.namaLengkap}>Alamat Perusahaan</b>
              <div className={styles.text3}>
                <div className={styles.inputArea}>
                  <div className={styles.inputText}>
                    <div className={styles.pilihTanggal}>
                      cth. Jl Otto Iskandardinata 30, DKI Jakarta
                    </div>
                  </div>
                  <hr style={{width:"100%"}}/>
                  {/* <img
                    className={styles.underlineIcon}
                    alt=""
                    src="Underline.svg"
                  /> */}
                </div>
              </div>
            </div>
            <div className={styles.unggahDokumenPribadiWrapper}>
              <b className={styles.dataDiriLengkap1}>Unggah Dokumen Pribadi</b>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.component1Wrapper}>
                    <img
                      className={styles.iconpaperfile}
                      alt=""
                      src={ktp}
                    />
                  </div>
                  <div className={styles.fotoEKtpParent}>
                    <b className={styles.namaLengkap}>Foto e-KTP</b>
                    <div className={styles.fotoBelumDiunggah1}>
                      Foto belum diunggah
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.btnText3}>Unggah</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.component1Wrapper}>
                    <img
                      className={styles.iconpaperfile}
                      alt=""
                      src={document}
                    />
                  </div>
                  <div className={styles.fotoEKtpParent}>
                    <b className={styles.namaLengkap}>Dokumen Legal</b>
                    <div className={styles.fotoBelumDiunggah1}>
                      Dokumen belum diunggah
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.btnText3}>Unggah</div>
                </div>
              </div>
            </div>
            <div className={styles.button2}>
              <b className={styles.dataDiriLengkap1}>Simpan</b>
            </div>
            <img
              className={styles.pulseEffectIcon}
              alt=""
              src="Pulse effect.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.text13}>
        <img className={styles.point} alt="" src={uar} />
        <b className={styles.dataDiriLengkap1}>
          Anda dapat berinteraksi pada tampilan ini
        </b>
      </div>
    </div>
  );
};

export default Simulator;
