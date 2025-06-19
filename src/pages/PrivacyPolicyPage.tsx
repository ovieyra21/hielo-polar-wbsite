
import Layout from "@/components/layout/Layout";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold text-ice-800 mb-6">Política de Privacidad</h1>
        <Separator className="mb-8" />

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ice-700 mb-4">Política de Privacidad para el Uso de WhatsApp API</h2>
            <p className="mb-4">
              En Hielo Polar del Centro, respetamos su privacidad y estamos comprometidos a proteger sus datos personales. 
              Esta política de privacidad describe cómo recopilamos, usamos y protegemos la información que usted proporciona 
              cuando utiliza nuestro servicio de comunicación a través de WhatsApp.
            </p>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">1. Información que Recopilamos</h3>
            <p className="mb-4">
              Cuando usted se comunica con nosotros a través de WhatsApp, podemos recopilar la siguiente información:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Su nombre y número de teléfono</li>
              <li>El contenido de los mensajes que nos envía</li>
              <li>Ubicación para coordinar entregas (si usted lo comparte)</li>
              <li>Información sobre pedidos y preferencias</li>
            </ul>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">2. Cómo Utilizamos su Información</h3>
            <p className="mb-4">
              Utilizamos la información recopilada a través de WhatsApp para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Procesar y gestionar sus pedidos</li>
              <li>Responder a sus consultas y solicitudes</li>
              <li>Mejorar nuestro servicio al cliente</li>
              <li>Enviar información relevante sobre nuestros productos y servicios</li>
              <li>Coordinar entregas y horarios</li>
            </ul>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">3. Consentimiento</h3>
            <p className="mb-4">
              Al comunicarse con nosotros a través de WhatsApp, usted consiente la recopilación y uso de su información 
              como se describe en esta política. Puede retirar su consentimiento en cualquier momento solicitándonos que 
              dejemos de procesar sus datos o que eliminemos su información de nuestros registros.
            </p>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">4. Compartiendo su Información</h3>
            <p className="mb-4">
              No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Proveedores de servicios que nos ayudan a operar nuestro negocio (como servicios de entrega)</li>
              <li>Autoridades legales cuando sea requerido por ley</li>
            </ul>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">5. Seguridad de Datos</h3>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra 
              acceso no autorizado, pérdida o alteración. Sin embargo, ninguna transmisión por Internet o almacenamiento 
              electrónico es completamente seguro, por lo que no podemos garantizar su seguridad absoluta.
            </p>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">6. Retención de Datos</h3>
            <p className="mb-4">
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines para los 
              que la recopilamos, incluido el cumplimiento de requisitos legales, contables o de informes.
            </p>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">7. Sus Derechos</h3>
            <p className="mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Solicitar la limitación del procesamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">8. Solicitud de Eliminación de Datos</h3>
            <p className="mb-4">
              Respetamos su derecho a solicitar la eliminación de sus datos personales. Si desea que eliminemos la información 
              que tenemos sobre usted, puede solicitar la eliminación de sus datos de las siguientes maneras:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Enviando un correo electrónico a <strong>contacto@hielolapolar.com</strong> con el asunto "Solicitud de eliminación de datos"</li>
              <li>Llamando al número telefónico <strong>+52 (417) 172-1455</strong> y solicitando la eliminación de sus datos</li>
              <li>Visitando nuestra oficina en Prol. Ignacio Zaragoza 615, Acámbaro, Guanajuato, y completando un formulario de solicitud</li>
            </ul>
            <p className="mb-4">
              Una vez recibida su solicitud, procederemos a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Verificar su identidad para garantizar la seguridad de sus datos</li>
              <li>Eliminar sus datos personales de nuestros sistemas dentro de un plazo de 30 días hábiles</li>
              <li>Notificarle cuando se haya completado el proceso de eliminación</li>
            </ul>
            <p className="mb-4">
              Es importante tener en cuenta que cierta información puede ser retenida para cumplir con obligaciones legales, 
              resolver disputas y hacer cumplir nuestros acuerdos.
            </p>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">9. Cambios a esta Política</h3>
            <p className="mb-4">
              Podemos actualizar esta política de privacidad periódicamente. Le notificaremos sobre cambios significativos 
              publicando la nueva política en nuestro sitio web o a través de nuestros canales de comunicación.
            </p>

            <h3 className="text-xl font-medium text-ice-600 mb-3 mt-6">10. Contacto</h3>
            <p className="mb-4">
              Si tiene preguntas o inquietudes sobre nuestra política de privacidad o el manejo de sus datos personales, 
              contáctenos en:
            </p>
            <ul className="list-none mb-4">
              <li>Email: contacto@hielolapolar.com</li>
              <li>Teléfono: +52 (417) 172-1455</li>
              <li>Dirección: Prol. Ignacio Zaragoza 615, Acámbaro, Guanajuato, México</li>
            </ul>
          </section>

          <section className="mb-6">
            <p className="text-sm text-gray-500">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
