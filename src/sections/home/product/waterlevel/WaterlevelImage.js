// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';

// ----------------------------------------------------------------------

export default function WaterlevelImage() {
  return (
    <Container sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/waterlevel/smartwaterlevel-1.png"
          alt="about-vision"
          effect="black-and-white"
        />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
                Taban suyu seviyenize göre projenizi sağlıklı yönetmeniz için Etüt-İzleme ve sulama sistemi yönetim hizmetlerimizle yanınızdayız.
                Kök bölgesine taban suyundan gelen su ile sulama suyu miktarı arasındaki ilişkiyi kuruyoruz. Kapiller yükselmeyi takip edebiliyor ve etüt verilerine göre alınması gereken önlemleri beraber kararlaştırıyoruz.
                Taban suyu seviyesinin bilinmesi, hem drenaj sorununun net olarak tanımlanabilmesi hem de sulama ve gübreleme işlemlerinin kirliliğe ve israfa yol açmadan yapılabilmesi için gerekmektedir.
                Taban suyu seviyesine bağlı olarak toprak profilinde taban suyundan zemine doğru kapiller hareket ile nem yükselir.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 10,
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/waterlevel/smartwaterlevel-2.png"
          alt="about-vision"
          effect="black-and-white"
        />
        <Grid container justifyContent="center">
        <Grid sx={{mt: 10, mb: 10}} item xs={12} sm={8}>
        <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
                Bitkilerin oksijensiz kalması ve kurumasına eden olan saturasyondaki toprak koşulları drenaj yapılmasını gerektirmektedir.
                Klasik drenaj anlayışında bitki, kök bölgesinden daha derine, mümkün olamıyorsa etkili kök bölgesi seviyesinde fazla su drene edilmeye çalışılır.
                Park ve bahçelerde ya da tarımsal üretimin yapıldığı bir tarlada/havzada drenaj sorunu çözümlendikten sonra sulama suyu ihtiyacı bitkiye verilir. 
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
        <Image
          src="/static/product/waterlevel/smartwaterlevel-3.png"
          alt="about-vision"
          effect="black-and-white"
        />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              Ancak çoğu bölgede bitkiler ihtiyaç duydukları sulama suyu ihtiyacını drene edilen/edilmeyen  taban suyundan karşılar. Ancak ne kadar miktarda bitki su ihtiyacının taban suyundan   karşılanabildiğini tespit edebilen bir teknoloji olmadığından ayrıca gereğinden fazla sulama  yapılır. Sulama ile beraber taban suyu iyice şişer ve/veya taban suyuna sulama suyu içerisindeki   gübre ve kimyasal maddelerle beraber karışır. Azot yıkanması gerçekleşerek ciddi bir gübre israfı ve yeraltı suyu ortaya çıkar.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 10,
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/waterlevel/smartwaterlevel-4.png"
          alt="about-vision"
          effect="black-and-white"
        />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              Park ve bahçelerde yada tarımsal üretimin yapıldığı bir tarlada/havzada drenaj sorunu   çözümlendikten sonra
              sulama suyu ihtiyacı bitkiye verilir. Ancak çoğu bölgede bitkiler ihtiyaç duydukları sulama suyu
              ihtiyacını drene edilen/edilmeyen taban suyundan karşılar. Ancak ne kadar miktarda bitki su ihtiyacının
              taban suyundan karşılanabildiğini tespit edebilen bir teknoloji olmadığından ayrıca gereğinden fazla
              sulama yapılır. Sulama ile beraber taban suyu iyice şişer ve/vaya taban suyuna sulama suyu içerisindeki
              gübre ve kimyasal maddelerle beraber karışır. Azot yıkanması gerçekleşerek ciddi bir gübre ısrafı ve yer
              altı suyu kirliliği ortaya çıkar.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 10,
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/waterlevel/smartwaterlevel-5.png"
          alt="about-vision"
          effect="black-and-white"
        />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              Sahip olduğumuz <b>SmartWaterLevel</b> teknolojisi ile bu sorun gerekli gözlemler yapılarak
              çözümlenebilmektedir. Hem bir havzada/tarlada/park ve bahçede taban suyu seviyesi etüdü yapabilmekte hemde
              her bitkinin gerçek zamanlı olarak taban suyundan kullandığı su miktarını tespit ederek yapay zeka
              teknolojisi ile sulama sistemini sadece kalan miktarı tamamlamak üzere çalıştırmak mümkün olabilmektedir.
              <b>SmartWaterLevel</b> taban suyu seviyesini gerçek zamanlı olarak izleyebilen akıllı bir robot sistemdir.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      
    </Container>
  );
}
