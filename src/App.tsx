import { FunctionComponent, useState, useCallback } from "react";
import PaymentMethodPayment1 from "./components/PaymentMethodPayment1";
import PortalPopup from "./components/PortalPopup";
import HowItWorks from "./components/HowItWorks";
import Pendaftaran01 from "./components/herosection/Pendaftaran01";
import Approvement from "./components/modal/Approvement";
import styles from "./PlayHere.module.css";

import Aurora from "./assets/Aurora.svg";
import logo from "./assets/Logo.svg";
import image01 from "./assets/image01.png";
import image02 from "./assets/image02.png";
import image03 from "./assets/image03.png";
import uar from "../src/assets/uar.svg";
import check from "./assets/Check.svg";
import iklan from "./assets/iklan.svg";
import paper from "./assets/paper.svg";
import line from "../src/assets/line.svg";
import playstore from "./assets/playstore.svg";
import cam from "./assets/cam.svg";
import secure from "./assets/secure.svg";
import kan from "./assets/kan.svg";
import youtube from "./assets/youtube-icon.svg";
import facebook from "./assets/facebook-icon.svg";
import linkedin from "./assets/linkedin-icon.svg";
import instagram from "./assets/instagram-icon.svg";
import phone from "./assets/phone-icon.svg";
import email from "./assets/email-icon.svg";
import address from "./assets/address-icon.svg";

const PlayHere: FunctionComponent = () => {
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [paymentApproved, setPaymentApproved] = useState(false);

  return (
    <>
      <div className={styles.playHere}>
        <div className={styles.heroSection}>
          <img className={styles.auroraIcon} alt="" src={Aurora} />

          <div className={styles.simulator}>
            <div className={styles.wrapper}>
              <div className={styles.heroTitle}>
                <div className={styles.simulasikanPembayaranLebihCParent}>
                  <div className={styles.hubungiKami}>
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
                  <div className={styles.title}>
                    <b className={styles.jumlahPinjaman}>
                      Lihat Simulasi Pinjaman Anda
                    </b>
                  </div>
                  <div className={styles.inputForm}>
                    <b className={styles.jumlahPinjaman}>Jumlah Pinjaman</b>
                    <div className={styles.inputArea}>
                      <input
                        className={styles.inputText}
                        placeholder="Rp 0"
                      ></input>
                      <div className={styles.inputAreaChild} />
                    </div>
                  </div>
                  <div className={styles.inputForm1}>
                    <b className={styles.jumlahPinjaman}>Estimasi Fee</b>
                    <div className={styles.inputArea}>
                      <input
                        className={styles.inputText}
                        placeholder="Rp 0"
                      ></input>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <b className={styles.jumlahPinjaman}>Daftar Sekarang!</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text19}>
              <img className={styles.checkBox} alt="" src={uar} />
              <b className={styles.jumlahPinjaman}>
                Anda dapat berinteraksi pada tampilan ini
              </b>
            </div>
          </div>
          {/* <Pendaftaran01/> */}
          <div className={styles.topBar}>
            <img className={styles.logoIcon} alt="" src={logo} />
            <div className={styles.body}>
              <div className={styles.menu}>
                <b className={styles.produk}>PRODUK</b>
                <b className={styles.produk}>SOLUSI BISNIS</b>
                <b className={styles.produk}>CARA KERJA</b>
                <b className={styles.produk}>HARGA</b>
                <b className={styles.produk}>PERUSAHAAN</b>
              </div>
              <div className={styles.action}>
                <div className={styles.button1}>
                  <div className={styles.produk}>LOGIN</div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.produk}>DAFTAR</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.howItWorks1}>
          <HowItWorks />
        </div>
        <div className={styles.checkout}>
          <div className={styles.grouping}>
            <b className={styles.lihatSimulasiPenggunaan1}>
              Lihat Simulasi Penggunaan Limit yang Diberikan!
            </b>
            <div className={styles.products}>
              <div className={styles.rectangleParent1}>
                <img className={styles.rectangleIcon} alt="" src={image03} />
                <div className={styles.soleilKursiLipatHitamParent}>
                  <b className={styles.evedalNightLamp}>
                    Soleil Kursi Lipat - Hitam
                  </b>
                  <div className={styles.frameParent3}>
                    <div className={styles.rp5000000Parent}>
                      <b className={styles.b}>Rp5.000.000</b>
                      <div className={styles.qty}>
                        <div className={styles.frame}>
                          <b className={styles.b7}>-</b>
                        </div>
                        <img
                          className={styles.qtyChild}
                          alt=""
                          src="Vector 2.svg"
                        />
                        <div className={styles.wrapper6}>
                          <div className={styles.jumlahPinjaman}>2</div>
                        </div>
                        <img
                          className={styles.qtyChild}
                          alt=""
                          src="Vector 1.svg"
                        />
                        <div className={styles.wrapper7}>
                          <b className={styles.plus}>+</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button4}>
                      <b className={styles.jumlahPinjaman}>Bayar Sekarang</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent2}>
                <img className={styles.rectangleIcon} alt="" src={image02} />
                <div className={styles.soleilKursiLipatHitamParent}>
                  <b className={styles.evedalNightLamp}>
                    Soleil Kursi Ayun 2 Dudukan Stripe - Biru/putih
                  </b>
                  <div className={styles.frameParent3}>
                    <div className={styles.rp5000000Parent}>
                      <b className={styles.b}>Rp10.000.000</b>
                      <div className={styles.qty}>
                        <div className={styles.frame}>
                          <b className={styles.b7}>-</b>
                        </div>
                        <div className={styles.wrapper6}>
                          <div className={styles.jumlahPinjaman}>1</div>
                        </div>
                        <div className={styles.wrapper7}>
                          <b className={styles.b8}>+</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button4}>
                      <b className={styles.jumlahPinjaman}>Bayar Sekarang</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent3}>
                <img className={styles.frameChild5} alt="" src={image01} />
                <div className={styles.soleilKursiLipatHitamParent}>
                  <b className={styles.evedalNightLamp}>EVEDAL Night Lamp</b>
                  <div className={styles.frameParent5}>
                    <div className={styles.rp5000000Parent}>
                      <b className={styles.b}>Rp5.000.000</b>
                      <div className={styles.qty2}>
                        <div className={styles.wrapper11}>
                          <b className={styles.b7}>-</b>
                        </div>
                        <div className={styles.wrapper12}>
                          <div className={styles.jumlahPinjaman}>50</div>
                        </div>
                        <div className={styles.wrapper13}>
                          <b className={styles.b8}>+</b>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.button6}
                      onClick={() => {
                        setPaymentMethod(true);
                      }}
                    >
                      <b className={styles.jumlahPinjaman}>Bayar Sekarang</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.text22}>
            <img className={styles.checkBox} alt="" src={uar} />
            <b className={styles.jumlahPinjaman}>
              Anda dapat berinteraksi pada tampilan ini
            </b>
          </div>
        </div>
        <div className={styles.benefit}>
          <div className={styles.title1}>
            <b className={styles.manfaatYangBisa1}>
              Manfaat yang Bisa Anda Rasakan
            </b>
          </div>
          <div className={styles.content6}>
            <div className={styles.list1}>
              <div className={styles.listChild} />
              <div className={styles.point}>
                <img className={styles.iconpapercheck} alt="" src={check} />
                <div className={styles.oneTimeIntegrationParent}>
                  <b className={styles.oneTimeIntegration1}>
                    One Time Integration
                  </b>
                  <div className={styles.menyediakanSolusiPembiayaan1}>
                    Menyediakan solusi pembiayaan dengan cara yang nyaman dan
                    efisien bagi bisnis melalui satu proses integrasi.
                  </div>
                </div>
              </div>
              <div className={styles.point1}>
                <img className={styles.iconpapercheck} alt="" src={check} />
                <div className={styles.oneTimeIntegrationParent}>
                  <b className={styles.oneTimeIntegration1}>
                    Seamless User Experience
                  </b>
                  <div className={styles.menyediakanSolusiPembiayaan1}>
                    Proses pengajuan pinjaman dengan lebih mudah tanpa harus
                    berinteraksi atau menelepon pihak pemberi pinjaman.
                  </div>
                </div>
              </div>
              <div className={styles.point2}>
                <img className={styles.iconpapercheck} alt="" src={check} />
                <div className={styles.oneTimeIntegrationParent}>
                  <b className={styles.oneTimeIntegration1}>
                    One Submission for Multiple Financial Institutions
                  </b>
                  <div className={styles.menyediakanSolusiPembiayaan1}>
                    Cukup dengan satu kali pendaftaran, Anda dapat langsung
                    diproses secara otomatis ke beberapa lembaga keuangan.
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.contentItem} alt="" src={iklan} />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.elementOutlineParent}>
            <div className={styles.lady2Parent}>
              <img className={styles.lady2Icon} alt="" src="Lady 2.png" />
              <img className={styles.groupItem} alt="" src="Vector 7.svg" />
            </div>
            <div className={styles.groupParent}>
              <div className={styles.lady2Wrapper}>
                <img className={styles.lady2Icon1} alt="" src={paper} />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.solusiPembayaranUntukKelancWrapper}>
                  <b className={styles.solusiPembayaranUntukContainer}>
                    <p
                      className={styles.apiEmbeded}
                    >{`Solusi Pembayaran untuk Kelancaran `}</p>
                    <p className={styles.apiEmbeded}>
                      Cashflow Bisnis via Paper id
                    </p>
                  </b>
                </div>
                <div className={styles.button7}>
                  <div className={styles.produk}>Daftar Gratis Sekarang</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer1}>
            <img className={styles.footerChild} alt="" src={line} />
            <div className={styles.content7}>
              <div className={styles.navigation}>
                <div className={styles.paperlogofinalWhiteModify1Parent}>
                  <img
                    className={styles.paperlogofinalWhiteModify1Icon}
                    alt=""
                    src={logo}
                  />
                  <div className={styles.frameParent7}>
                    <div className={styles.timeWrapper}>
                      <div className={styles.frameParent9}>
                        <div className={styles.heroTitle}>
                          <div className={styles.heroTitle}>
                            <b className={styles.hubungiKami}>Hubungi Kami</b>
                          </div>
                        </div>
                        <div
                          className={styles.simulasikanPembayaranLebihCParent}
                        >
                          <div className={styles.frameParent11}>
                            <div className={styles.phoneIcon1Wrapper}>
                              <img
                                className={styles.phoneIcon11}
                                alt=""
                                src={phone}
                              />
                            </div>
                            <div className={styles.parent3}>
                              <div className={styles.hubungiKami}>
                                +62 821 1767 9137
                              </div>
                              <div className={styles.hubungiKami}>
                                +62 811 1098 746 (WA)
                              </div>
                            </div>
                          </div>
                          <div className={styles.frameParent12}>
                            <div className={styles.phoneIcon1Wrapper}>
                              <img
                                className={styles.emailIcon11}
                                alt=""
                                src={email}
                              />
                            </div>
                            <div className={styles.heroTitle}>
                              <div className={styles.hubungiKami}>
                                support@paper.id
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.jamOperasional}>
                        <div className={styles.heroTitle}>
                          <b className={styles.hubungiKami}>Jam Operasional</b>
                        </div>
                        <div className={styles.timeWrapper}>
                          <div className={styles.time}>
                            <div className={styles.parent3}>
                              <div className={styles.frameParent14}>
                                <div className={styles.seninJumatParent}>
                                  <div className={styles.hubungiKami}>
                                    Senin - Jumat
                                  </div>
                                  <div className={styles.hubungiKami}>:</div>
                                </div>
                                <div className={styles.hubungiKami}>
                                  07.00 - 22.00 WIB
                                </div>
                              </div>
                              <div className={styles.frameParent15}>
                                <div
                                  className={styles.sabtuLiburNasionalParent}
                                >
                                  <div
                                    className={styles.hubungiKami}
                                  >{`Sabtu & Libur Nasional`}</div>
                                  <div className={styles.hubungiKami}>:</div>
                                </div>
                                <div className={styles.hubungiKami}>
                                  08.00 - 17.00 WIB
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent16}>
                      <div className={styles.phoneIcon1Wrapper}>
                        <img
                          className={styles.addressIcon11}
                          alt=""
                          src={address}
                        />
                      </div>
                      <div className={styles.time}>
                        <div className={styles.jlSunterGarden3}>
                          Jl. Sunter Garden Raya No.5D, RT.6/RW.12, Sunter
                          Agung, Tj. Priok, Kota Jkt Utara, DKI Jakarta 14350
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.navigationParent}>
                <div className={styles.navigation1}>
                  <b className={styles.hubungiKami}>Fitur Lainnya</b>
                  <div className={styles.frameParent17}>
                    <div className={styles.orderDanPenawaranParent}>
                      <div className={styles.hubungiKami}>
                        Order dan Penawaran
                      </div>
                      <div className={styles.hubungiKami}>Akuntansi Gratis</div>
                      <div className={styles.hubungiKami}>Digital Payment</div>
                      <div className={styles.hubungiKami}>Manajemen Stok</div>
                      <div className={styles.hubungiKami}>Laporan Keuangan</div>
                      <div className={styles.hubungiKami}>One Click Share</div>
                      <div className={styles.hubungiKami}>Template Invoice</div>
                    </div>
                    <div className={styles.orderDanPenawaranParent}>
                      <div className={styles.hubungiKami}>Billing</div>
                      <div className={styles.hubungiKami}>Financing</div>
                      <div className={styles.hubungiKami}>PaperChain</div>
                      <div className={styles.hubungiKami}>PaperTrade</div>
                      <div className={styles.hubungiKami}>
                        Enterprise Solution
                      </div>
                      <div className={styles.hubungiKami}>PayPer</div>
                    </div>
                  </div>
                </div>
                <div className={styles.navigation2}>
                  <b className={styles.hubungiKami}>Solusi</b>
                  <div className={styles.navigationInner}>
                    <div className={styles.orderDanPenawaranParent}>
                      <div className={styles.hubungiKami}>Jual Beli</div>
                      <div className={styles.hubungiKami}>Jasa</div>
                      <div className={styles.hubungiKami}>{`F&B`}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.navigation1}>
                  <b className={styles.hubungiKami}>Perusahaan</b>
                  <div className={styles.navigationInner}>
                    <div className={styles.orderDanPenawaranParent}>
                      <div className={styles.hubungiKami}>Tentang Kami</div>
                      <div className={styles.hubungiKami}>Cara Kerja</div>
                      <div className={styles.hubungiKami}>Karir</div>
                      <div className={styles.hubungiKami}>Pricing</div>
                      <div className={styles.hubungiKami}>Blog</div>
                      <div className={styles.hubungiKami}>Help Center</div>
                      <div className={styles.hubungiKami}>FAQ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.footerChild} alt="" src="Vector 10.svg" />
            <div className={styles.navigation4}>
              <div />
              <div className={styles.followMeParent}>
                <div className={styles.security}>
                  <b className={styles.hubungiKami}>Download Paper.id apps</b>
                  <img
                    className={styles.playstoreIcon1}
                    alt=""
                    src={playstore}
                  />
                </div>
                <div className={styles.security}>
                  <b className={styles.hubungiKami}>Keamanan</b>
                  <div className={styles.secureWhite1Parent}>
                    <img
                      className={styles.secureWhite1Icon}
                      alt=""
                      src={secure}
                    />
                    <div className={styles.kanLogo27001Parent}>
                      <img
                        className={styles.kanLogo27001Icon1}
                        alt=""
                        src={kan}
                      />
                      <img
                        className={styles.bvCertificationIso27001Icon}
                        alt=""
                        src={cam}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.footerChild} alt="" src={line} />
            <div className={styles.footerNotes}>
              <b className={styles.hubungiKami}>
                Copyright © 2023 Paper.id (PT Pakar Digital Global)
              </b>
              <div className={styles.iconWrapper}>
                <img className={styles.youtubeIcon1} alt="" src={youtube} />
                <img className={styles.youtubeIcon1} alt="" src={facebook} />
                <img className={styles.youtubeIcon1} alt="" src={linkedin} />
                <img className={styles.youtubeIcon1} alt="" src={instagram} />
              </div>
              <div className={styles.right}>
                <b className={styles.hubungiKami}>Privacy Policy</b>
                <b className={styles.hubungiKami}>{`Terms & Condition`}</b>
                <b className={styles.hubungiKami}>Sitemap</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {paymentMethod && (
        <PortalPopup
          overlayColor="rgba(18, 60, 89, 0.69"
          placement="Centered"
          onOutsideClick={() => {
            setPaymentMethod(false);
          }}
        >
          <PaymentMethodPayment1
            setPaymentMethod={setPaymentMethod}
            setPaymentApproved={setPaymentApproved}
          />
        </PortalPopup>
      )}
      {paymentApproved && (
        <PortalPopup
          overlayColor="rgba(18, 60, 89, 0.69"
          placement="Centered"
          onOutsideClick={() => {
            setPaymentApproved(false);
          }}
        >
          <Approvement
            onClose={() => {
              setPaymentApproved(false);
            }}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default PlayHere;
