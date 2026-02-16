import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Send, MessageCircle, Mail, MapPin } from 'lucide-react';

import { Title } from '@/app/pages/Titles/Title';

export function ContactsPage() {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="nav.contacts" text="contacts.subtitle"/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Telegram</CardTitle>
              <CardDescription>{t('footer.askquestion.telegram')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="#">Open Telegram</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>{t('footer.askquestion.whatsapp')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="#">Open WhatsApp</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>ola@relocode.es</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:ola@relocode.es">Send Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">{t('cta.consultation')}</CardTitle>
            <CardDescription>
              Fill out the form and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your case..." 
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <MapPin className="w-5 h-5" />
            <p>Barcelona, Spain | Lisbon, Portugal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
